import { Date } from "./Date";

/**
 * requestedDateRange
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202111`
 */
export interface RequestedDateRange {
    /** startDate */
    startDate?: Date;
    /** endDate */
    endDate?: Date;
}
