import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { GetSuggestedAdUnitsByStatement } from "./definitions/GetSuggestedAdUnitsByStatement";
import { GetSuggestedAdUnitsByStatementResponse } from "./definitions/GetSuggestedAdUnitsByStatementResponse";
import { PerformSuggestedAdUnitAction } from "./definitions/PerformSuggestedAdUnitAction";
import { PerformSuggestedAdUnitActionResponse } from "./definitions/PerformSuggestedAdUnitActionResponse";
import { SuggestedAdUnitService } from "./services/SuggestedAdUnitService";

export interface SuggestedAdUnitServiceClient extends SoapClient {
    SuggestedAdUnitService: SuggestedAdUnitService;
    getSuggestedAdUnitsByStatementAsync(getSuggestedAdUnitsByStatement: GetSuggestedAdUnitsByStatement): Promise<[result: GetSuggestedAdUnitsByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    performSuggestedAdUnitActionAsync(performSuggestedAdUnitAction: PerformSuggestedAdUnitAction): Promise<[result: PerformSuggestedAdUnitActionResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create SuggestedAdUnitServiceClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<SuggestedAdUnitServiceClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
