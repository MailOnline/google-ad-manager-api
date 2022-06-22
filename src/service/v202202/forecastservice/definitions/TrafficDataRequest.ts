import { Targeting } from "./Targeting";
import { RequestedDateRange } from "./RequestedDateRange";

/**
 * trafficDataRequest
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202202`
 */
export interface TrafficDataRequest {
    /** targeting */
    targeting?: Targeting;
    /** requestedDateRange */
    requestedDateRange?: RequestedDateRange;
}
