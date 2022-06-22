import { UserAction } from "./UserAction";
import { FilterStatement } from "./FilterStatement";

/** performUserAction */
export interface PerformUserAction {
    /** userAction */
    userAction?: UserAction;
    /** filterStatement */
    filterStatement?: FilterStatement;
}
