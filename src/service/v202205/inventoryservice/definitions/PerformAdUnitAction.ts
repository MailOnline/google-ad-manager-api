import { AdUnitAction } from "./AdUnitAction";
import { FilterStatement } from "./FilterStatement";

/** performAdUnitAction */
export interface PerformAdUnitAction {
    /** adUnitAction */
    adUnitAction?: AdUnitAction;
    /** filterStatement */
    filterStatement?: FilterStatement;
}
