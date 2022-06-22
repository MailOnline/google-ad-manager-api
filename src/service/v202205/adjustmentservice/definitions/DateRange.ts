import { StartDate } from "./StartDate";

/**
 * dateRange
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202205`
 */
export interface DateRange {
    /** startDate */
    startDate?: StartDate;
    /** endDate */
    endDate?: StartDate;
}
