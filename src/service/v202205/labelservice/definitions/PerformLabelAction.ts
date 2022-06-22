import { LabelAction } from "./LabelAction";
import { FilterStatement } from "./FilterStatement";

/** performLabelAction */
export interface PerformLabelAction {
    /** labelAction */
    labelAction?: LabelAction;
    /** filterStatement */
    filterStatement?: FilterStatement;
}
