import { MobileApplicationAction } from "./MobileApplicationAction";
import { FilterStatement } from "./FilterStatement";

/** performMobileApplicationAction */
export interface PerformMobileApplicationAction {
    /** mobileApplicationAction */
    mobileApplicationAction?: MobileApplicationAction;
    /** filterStatement */
    filterStatement?: FilterStatement;
}
