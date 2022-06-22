import { Action } from "./Action";
import { FilterStatement } from "./FilterStatement";

/** performAudienceSegmentAction */
export interface PerformAudienceSegmentAction {
    /** action */
    action?: Action;
    /** filterStatement */
    filterStatement?: FilterStatement;
}
