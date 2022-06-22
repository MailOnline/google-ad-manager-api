import { CreativeAction } from "./CreativeAction";
import { FilterStatement } from "./FilterStatement";

/** performCreativeAction */
export interface PerformCreativeAction {
    /** creativeAction */
    creativeAction?: CreativeAction;
    /** filterStatement */
    filterStatement?: FilterStatement;
}
