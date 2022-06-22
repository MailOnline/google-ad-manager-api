import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { CreateUserTeamAssociations } from "./definitions/CreateUserTeamAssociations";
import { CreateUserTeamAssociationsResponse } from "./definitions/CreateUserTeamAssociationsResponse";
import { GetUserTeamAssociationsByStatement } from "./definitions/GetUserTeamAssociationsByStatement";
import { GetUserTeamAssociationsByStatementResponse } from "./definitions/GetUserTeamAssociationsByStatementResponse";
import { PerformUserTeamAssociationAction } from "./definitions/PerformUserTeamAssociationAction";
import { PerformUserTeamAssociationActionResponse } from "./definitions/PerformUserTeamAssociationActionResponse";
import { UpdateUserTeamAssociations } from "./definitions/UpdateUserTeamAssociations";
import { UpdateUserTeamAssociationsResponse } from "./definitions/UpdateUserTeamAssociationsResponse";
import { UserTeamAssociationService } from "./services/UserTeamAssociationService";

export interface UserTeamAssociationServiceClient extends SoapClient {
    UserTeamAssociationService: UserTeamAssociationService;
    createUserTeamAssociationsAsync(createUserTeamAssociations: CreateUserTeamAssociations): Promise<[result: CreateUserTeamAssociationsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getUserTeamAssociationsByStatementAsync(getUserTeamAssociationsByStatement: GetUserTeamAssociationsByStatement): Promise<[result: GetUserTeamAssociationsByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    performUserTeamAssociationActionAsync(performUserTeamAssociationAction: PerformUserTeamAssociationAction): Promise<[result: PerformUserTeamAssociationActionResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    updateUserTeamAssociationsAsync(updateUserTeamAssociations: UpdateUserTeamAssociations): Promise<[result: UpdateUserTeamAssociationsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create UserTeamAssociationServiceClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<UserTeamAssociationServiceClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
