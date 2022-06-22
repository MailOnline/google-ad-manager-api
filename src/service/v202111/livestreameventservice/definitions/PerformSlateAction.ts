import { SlateAction } from "./SlateAction";
import { FilterStatement } from "./FilterStatement";

/** performSlateAction */
export interface PerformSlateAction {
    /** slateAction */
    slateAction?: SlateAction;
    /** filterStatement */
    filterStatement?: FilterStatement;
}
