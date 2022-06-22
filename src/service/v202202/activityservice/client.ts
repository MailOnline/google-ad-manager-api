import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { CreateActivities } from "./definitions/CreateActivities";
import { CreateActivitiesResponse } from "./definitions/CreateActivitiesResponse";
import { GetActivitiesByStatement } from "./definitions/GetActivitiesByStatement";
import { GetActivitiesByStatementResponse } from "./definitions/GetActivitiesByStatementResponse";
import { UpdateActivities } from "./definitions/UpdateActivities";
import { UpdateActivitiesResponse } from "./definitions/UpdateActivitiesResponse";
import { ActivityService } from "./services/ActivityService";

export interface ActivityServiceClient extends SoapClient {
    ActivityService: ActivityService;
    createActivitiesAsync(createActivities: CreateActivities): Promise<[result: CreateActivitiesResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getActivitiesByStatementAsync(getActivitiesByStatement: GetActivitiesByStatement): Promise<[result: GetActivitiesByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    updateActivitiesAsync(updateActivities: UpdateActivities): Promise<[result: UpdateActivitiesResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create ActivityServiceClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<ActivityServiceClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
