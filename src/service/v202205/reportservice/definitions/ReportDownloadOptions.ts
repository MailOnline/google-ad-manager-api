
/**
 * reportDownloadOptions
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202205`
 */
export interface ReportDownloadOptions {
    /** ExportFormat|xsd:string|TSV,TSV_EXCEL,CSV_DUMP,XML,XLSX */
    exportFormat?: string;
    /** xsd:boolean */
    includeReportProperties?: string;
    /** xsd:boolean */
    includeTotalsRow?: string;
    /** xsd:boolean */
    useGzipCompression?: string;
}
