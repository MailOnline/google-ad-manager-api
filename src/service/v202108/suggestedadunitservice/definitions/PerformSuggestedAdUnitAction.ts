import { SuggestedAdUnitAction } from "./SuggestedAdUnitAction";
import { FilterStatement } from "./FilterStatement";

/** performSuggestedAdUnitAction */
export interface PerformSuggestedAdUnitAction {
    /** suggestedAdUnitAction */
    suggestedAdUnitAction?: SuggestedAdUnitAction;
    /** filterStatement */
    filterStatement?: FilterStatement;
}
