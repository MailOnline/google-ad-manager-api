import { StartDateTime } from "./StartDateTime";
import { BreakdownEntries } from "./BreakdownEntries";

/**
 * breakdowns
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202202`
 */
export interface Breakdowns {
    /** startTime */
    startTime?: StartDateTime;
    /** endTime */
    endTime?: StartDateTime;
    /** breakdownEntries[] */
    breakdownEntries?: Array<BreakdownEntries>;
}
