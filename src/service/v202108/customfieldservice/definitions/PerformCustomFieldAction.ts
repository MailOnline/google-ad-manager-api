import { CustomFieldAction } from "./CustomFieldAction";
import { FilterStatement } from "./FilterStatement";

/** performCustomFieldAction */
export interface PerformCustomFieldAction {
    /** customFieldAction */
    customFieldAction?: CustomFieldAction;
    /** filterStatement */
    filterStatement?: FilterStatement;
}
