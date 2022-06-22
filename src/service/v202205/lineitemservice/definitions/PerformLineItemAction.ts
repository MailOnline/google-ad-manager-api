import { LineItemAction } from "./LineItemAction";
import { FilterStatement } from "./FilterStatement";

/** performLineItemAction */
export interface PerformLineItemAction {
    /** lineItemAction */
    lineItemAction?: LineItemAction;
    /** filterStatement */
    filterStatement?: FilterStatement;
}
