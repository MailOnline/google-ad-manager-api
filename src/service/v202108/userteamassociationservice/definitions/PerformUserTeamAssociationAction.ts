import { UserTeamAssociationAction } from "./UserTeamAssociationAction";
import { FilterStatement } from "./FilterStatement";

/** performUserTeamAssociationAction */
export interface PerformUserTeamAssociationAction {
    /** userTeamAssociationAction */
    userTeamAssociationAction?: UserTeamAssociationAction;
    /** statement */
    statement?: FilterStatement;
}
