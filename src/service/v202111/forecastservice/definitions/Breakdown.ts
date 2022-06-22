import { StartDateTime } from "./StartDateTime";
import { Targets } from "./Targets";

/**
 * breakdown
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202111`
 */
export interface Breakdown {
    /** timeWindows[] */
    timeWindows?: Array<StartDateTime>;
    /** targets[] */
    targets?: Array<Targets>;
}
