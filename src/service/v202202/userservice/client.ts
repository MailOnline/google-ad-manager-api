import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { CreateUsers } from "./definitions/CreateUsers";
import { CreateUsersResponse } from "./definitions/CreateUsersResponse";
import { GetAllRoles } from "./definitions/GetAllRoles";
import { GetAllRolesResponse } from "./definitions/GetAllRolesResponse";
import { GetCurrentUser } from "./definitions/GetCurrentUser";
import { GetCurrentUserResponse } from "./definitions/GetCurrentUserResponse";
import { GetUsersByStatement } from "./definitions/GetUsersByStatement";
import { GetUsersByStatementResponse } from "./definitions/GetUsersByStatementResponse";
import { PerformUserAction } from "./definitions/PerformUserAction";
import { PerformUserActionResponse } from "./definitions/PerformUserActionResponse";
import { UpdateUsers } from "./definitions/UpdateUsers";
import { UpdateUsersResponse } from "./definitions/UpdateUsersResponse";
import { UserService } from "./services/UserService";

export interface UserServiceClient extends SoapClient {
    UserService: UserService;
    createUsersAsync(createUsers: CreateUsers): Promise<[result: CreateUsersResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getAllRolesAsync(getAllRoles: GetAllRoles): Promise<[result: GetAllRolesResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getCurrentUserAsync(getCurrentUser: GetCurrentUser): Promise<[result: GetCurrentUserResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getUsersByStatementAsync(getUsersByStatement: GetUsersByStatement): Promise<[result: GetUsersByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    performUserActionAsync(performUserAction: PerformUserAction): Promise<[result: PerformUserActionResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    updateUsersAsync(updateUsers: UpdateUsers): Promise<[result: UpdateUsersResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create UserServiceClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<UserServiceClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
