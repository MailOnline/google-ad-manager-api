import { TeamAction } from "./TeamAction";
import { FilterStatement } from "./FilterStatement";

/** performTeamAction */
export interface PerformTeamAction {
    /** teamAction */
    teamAction?: TeamAction;
    /** filterStatement */
    filterStatement?: FilterStatement;
}
