import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { CreateActivityGroups } from "./definitions/CreateActivityGroups";
import { CreateActivityGroupsResponse } from "./definitions/CreateActivityGroupsResponse";
import { GetActivityGroupsByStatement } from "./definitions/GetActivityGroupsByStatement";
import { GetActivityGroupsByStatementResponse } from "./definitions/GetActivityGroupsByStatementResponse";
import { UpdateActivityGroups } from "./definitions/UpdateActivityGroups";
import { UpdateActivityGroupsResponse } from "./definitions/UpdateActivityGroupsResponse";
import { ActivityGroupService } from "./services/ActivityGroupService";

export interface ActivityGroupServiceClient extends SoapClient {
    ActivityGroupService: ActivityGroupService;
    createActivityGroupsAsync(createActivityGroups: CreateActivityGroups): Promise<[result: CreateActivityGroupsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getActivityGroupsByStatementAsync(getActivityGroupsByStatement: GetActivityGroupsByStatement): Promise<[result: GetActivityGroupsByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    updateActivityGroupsAsync(updateActivityGroups: UpdateActivityGroups): Promise<[result: UpdateActivityGroupsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create ActivityGroupServiceClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<ActivityGroupServiceClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
