import { CreateUsers } from "../definitions/CreateUsers";
import { CreateUsersResponse } from "../definitions/CreateUsersResponse";
import { GetAllRoles } from "../definitions/GetAllRoles";
import { GetAllRolesResponse } from "../definitions/GetAllRolesResponse";
import { GetCurrentUser } from "../definitions/GetCurrentUser";
import { GetCurrentUserResponse } from "../definitions/GetCurrentUserResponse";
import { GetUsersByStatement } from "../definitions/GetUsersByStatement";
import { GetUsersByStatementResponse } from "../definitions/GetUsersByStatementResponse";
import { PerformUserAction } from "../definitions/PerformUserAction";
import { PerformUserActionResponse } from "../definitions/PerformUserActionResponse";
import { UpdateUsers } from "../definitions/UpdateUsers";
import { UpdateUsersResponse } from "../definitions/UpdateUsersResponse";

export interface UserServiceInterfacePort {
    createUsers(createUsers: CreateUsers, callback: (err: any, result: CreateUsersResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getAllRoles(getAllRoles: GetAllRoles, callback: (err: any, result: GetAllRolesResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getCurrentUser(getCurrentUser: GetCurrentUser, callback: (err: any, result: GetCurrentUserResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getUsersByStatement(getUsersByStatement: GetUsersByStatement, callback: (err: any, result: GetUsersByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    performUserAction(performUserAction: PerformUserAction, callback: (err: any, result: PerformUserActionResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    updateUsers(updateUsers: UpdateUsers, callback: (err: any, result: UpdateUsersResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
