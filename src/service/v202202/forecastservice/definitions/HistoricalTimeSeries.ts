import { RequestedDateRange } from "./RequestedDateRange";

/**
 * historicalTimeSeries
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202202`
 */
export interface HistoricalTimeSeries {
    /** timeSeriesDateRange */
    timeSeriesDateRange?: RequestedDateRange;
    /** xsd:long */
    values?: Array<string>;
}
