import { HistoricalTimeSeries } from "./HistoricalTimeSeries";
import { RequestedDateRange } from "./RequestedDateRange";

/**
 * rval
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202202`
 */
export interface Rval2 {
    /** historicalTimeSeries */
    historicalTimeSeries?: HistoricalTimeSeries;
    /** forecastedTimeSeries */
    forecastedTimeSeries?: HistoricalTimeSeries;
    /** forecastedAssignedTimeSeries */
    forecastedAssignedTimeSeries?: HistoricalTimeSeries;
    /** overallDateRange */
    overallDateRange?: RequestedDateRange;
}
