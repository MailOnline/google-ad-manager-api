import { CreateActivities } from "../definitions/CreateActivities";
import { CreateActivitiesResponse } from "../definitions/CreateActivitiesResponse";
import { GetActivitiesByStatement } from "../definitions/GetActivitiesByStatement";
import { GetActivitiesByStatementResponse } from "../definitions/GetActivitiesByStatementResponse";
import { UpdateActivities } from "../definitions/UpdateActivities";
import { UpdateActivitiesResponse } from "../definitions/UpdateActivitiesResponse";

export interface ActivityServiceInterfacePort {
    createActivities(createActivities: CreateActivities, callback: (err: any, result: CreateActivitiesResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getActivitiesByStatement(getActivitiesByStatement: GetActivitiesByStatement, callback: (err: any, result: GetActivitiesByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    updateActivities(updateActivities: UpdateActivities, callback: (err: any, result: UpdateActivitiesResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
