import { CreateActivityGroups } from "../definitions/CreateActivityGroups";
import { CreateActivityGroupsResponse } from "../definitions/CreateActivityGroupsResponse";
import { GetActivityGroupsByStatement } from "../definitions/GetActivityGroupsByStatement";
import { GetActivityGroupsByStatementResponse } from "../definitions/GetActivityGroupsByStatementResponse";
import { UpdateActivityGroups } from "../definitions/UpdateActivityGroups";
import { UpdateActivityGroupsResponse } from "../definitions/UpdateActivityGroupsResponse";

export interface ActivityGroupServiceInterfacePort {
    createActivityGroups(createActivityGroups: CreateActivityGroups, callback: (err: any, result: CreateActivityGroupsResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getActivityGroupsByStatement(getActivityGroupsByStatement: GetActivityGroupsByStatement, callback: (err: any, result: GetActivityGroupsByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    updateActivityGroups(updateActivityGroups: UpdateActivityGroups, callback: (err: any, result: UpdateActivityGroupsResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
