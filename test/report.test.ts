import { ensureCorrectOrderOfReportQueryParameters } from '../src'

test('ensureCorrectOrderOfReportQueryParameters()', () => {
  expect(
    JSON.stringify(
      ensureCorrectOrderOfReportQueryParameters({
        dimensions: [
          'DATE',
          'COUNTRY_NAME',
          'DEVICE_CATEGORY_NAME',
          'AD_UNIT_ID',
          'AD_UNIT_NAME',
        ],

        columns: [
          'TOTAL_LINE_ITEM_LEVEL_IMPRESSIONS',
          'TOTAL_ACTIVE_VIEW_MEASURABLE_IMPRESSIONS',
          'AD_SERVER_ACTIVE_VIEW_VIEWABLE_IMPRESSIONS',
          'TOTAL_LINE_ITEM_LEVEL_ALL_REVENUE',
        ],

        startDate: { year: 2024, month: 4, day: 30 },
        endDate: { year: 2024, month: 4, day: 30 },
        dateRangeType: 'TODAY',
        adUnitView: 'HIERARCHICAL',
      }),
      null,
      2,
    ),
  ).toMatchInlineSnapshot(`
    "{
      "dimensions": [
        "DATE",
        "COUNTRY_NAME",
        "DEVICE_CATEGORY_NAME",
        "AD_UNIT_ID",
        "AD_UNIT_NAME"
      ],
      "adUnitView": "HIERARCHICAL",
      "columns": [
        "TOTAL_LINE_ITEM_LEVEL_IMPRESSIONS",
        "TOTAL_ACTIVE_VIEW_MEASURABLE_IMPRESSIONS",
        "AD_SERVER_ACTIVE_VIEW_VIEWABLE_IMPRESSIONS",
        "TOTAL_LINE_ITEM_LEVEL_ALL_REVENUE"
      ],
      "startDate": {
        "year": 2024,
        "month": 4,
        "day": 30
      },
      "endDate": {
        "year": 2024,
        "month": 4,
        "day": 30
      },
      "dateRangeType": "TODAY"
    }"
  `)
})
