import { Breakdown } from "./Breakdown";

/**
 * forecastOptions
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202202`
 */
export interface ForecastOptions {
    /** xsd:boolean */
    includeTargetingCriteriaBreakdown?: string;
    /** xsd:boolean */
    includeContendingLineItems?: string;
    /** breakdown */
    breakdown?: Breakdown;
}
