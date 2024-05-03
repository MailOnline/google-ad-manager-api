import { IncomingMessage } from 'node:http'
import https from 'node:https'
import { setTimeout } from 'node:timers/promises'
import { GoogleAdManager, ReportService } from '..'
import { Entry, entries } from '../lang/Object'

export interface RunAndDownloadReportOpts {
  exportFormat: 'TSV' | 'TSV_EXCEL' | 'CSV_DUMP' | 'XML' | 'XLSX'
  statusCheckInterval?: number
  query: ReportService.ReportQuery
}

/**
 * @returns An incoming stream of a GZIP'd result
 * @example
 * ```
 * runAndDownloadReport(api, {
 *   exportFormat: 'CSV_DUMP',
 *   query: {
 *     dimensions: [
 *       'DATE',
 *       'COUNTRY_NAME',
 *       'DEVICE_CATEGORY_NAME',
 *       'AD_UNIT_ID',
 *       'AD_UNIT_NAME',
 *     ],
 *     columns: [
 *       'AD_UNIT_CODE',
 *       'TOTAL_LINE_ITEM_LEVEL_IMPRESSIONS',
 *       'TOTAL_ACTIVE_VIEW_MEASURABLE_IMPRESSIONS',
 *       'AD_SERVER_ACTIVE_VIEW_VIEWABLE_IMPRESSIONS',
 *       'TOTAL_LINE_ITEM_LEVEL_ALL_REVENUE',
 *     ],
 *     startDate: { year: '2024', month: '4', day: '30' },
 *     endDate: { year: '2024', month: '4', day: '30' },
 *     dateRangeType: 'TODAY',
 *     adUnitView: 'HIERARCHICAL',
 *   },
 * }).then(response => {
 *   response.pipe(
 *     createWriteStream('result.csv.gz', {
 *       autoClose: true,
 *     }))
 *   )
 * })
 * ```
 */
export async function runAndDownloadReport(
  api: GoogleAdManager,
  {
    exportFormat,
    query,
    statusCheckInterval = 2_000,
  }: RunAndDownloadReportOpts,
): Promise<IncomingMessage> {
  const client = await api.createReportServiceClient()

  const [reportJob] = await client.runReportJobAsync({
    reportJob: {
      reportQuery: ensureCorrectOrderOfReportQueryParameters(query),
    },
  })

  let status = 'IN_PROGRESS'

  while (status === 'IN_PROGRESS') {
    const [result, rawResponse] = await client.getReportJobStatusAsync({
      reportJobId: reportJob.rval?.id,
    })

    if (!result.rval) throw new Error('No status received')

    status = result.rval

    if (status === 'FAILED') throw new Error(`Report failed.\n\n${rawResponse}`)

    await setTimeout(statusCheckInterval)
  }

  const [urlResult] = await client.getReportDownloadURLAsync({
    reportJobId: reportJob.rval?.id,
    exportFormat,
  })

  if (!urlResult.rval) throw new Error('GAM did not provide a download url')

  return new Promise<IncomingMessage>((resolve) => {
    https.get(urlResult.rval!, resolve)
  })
}

/**
 * GAM's report api will fail unless the order is:
 * 1. dimensions
 * 2. [adUnitView]
 * ...
 */
export function ensureCorrectOrderOfReportQueryParameters(
  query: ReportService.ReportQuery,
): ReportService.ReportQuery {
  const queryEntries = entries(query).filter(
    (x): x is Exclude<Entry<ReportService.ReportQuery>, undefined> => !!x,
  )

  const newQueryEntries = [
    ...queryEntries.filter(([key]) => key === 'dimensions'),
    ...queryEntries.filter(([key]) => key === 'adUnitView'),
    ...queryEntries.filter(
      ([key]) => key !== 'dimensions' && key !== 'adUnitView',
    ),
  ]

  return Object.fromEntries(newQueryEntries)
}
