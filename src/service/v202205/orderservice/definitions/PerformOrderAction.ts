import { OrderAction } from "./OrderAction";
import { FilterStatement } from "./FilterStatement";

/** performOrderAction */
export interface PerformOrderAction {
    /** orderAction */
    orderAction?: OrderAction;
    /** filterStatement */
    filterStatement?: FilterStatement;
}
