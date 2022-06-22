import { CreateUserTeamAssociations } from "../definitions/CreateUserTeamAssociations";
import { CreateUserTeamAssociationsResponse } from "../definitions/CreateUserTeamAssociationsResponse";
import { GetUserTeamAssociationsByStatement } from "../definitions/GetUserTeamAssociationsByStatement";
import { GetUserTeamAssociationsByStatementResponse } from "../definitions/GetUserTeamAssociationsByStatementResponse";
import { PerformUserTeamAssociationAction } from "../definitions/PerformUserTeamAssociationAction";
import { PerformUserTeamAssociationActionResponse } from "../definitions/PerformUserTeamAssociationActionResponse";
import { UpdateUserTeamAssociations } from "../definitions/UpdateUserTeamAssociations";
import { UpdateUserTeamAssociationsResponse } from "../definitions/UpdateUserTeamAssociationsResponse";

export interface UserTeamAssociationServiceInterfacePort {
    createUserTeamAssociations(createUserTeamAssociations: CreateUserTeamAssociations, callback: (err: any, result: CreateUserTeamAssociationsResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getUserTeamAssociationsByStatement(getUserTeamAssociationsByStatement: GetUserTeamAssociationsByStatement, callback: (err: any, result: GetUserTeamAssociationsByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    performUserTeamAssociationAction(performUserTeamAssociationAction: PerformUserTeamAssociationAction, callback: (err: any, result: PerformUserTeamAssociationActionResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    updateUserTeamAssociations(updateUserTeamAssociations: UpdateUserTeamAssociations, callback: (err: any, result: UpdateUserTeamAssociationsResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
