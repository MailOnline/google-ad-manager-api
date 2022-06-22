import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { GetTargetingPresetsByStatement } from "./definitions/GetTargetingPresetsByStatement";
import { GetTargetingPresetsByStatementResponse } from "./definitions/GetTargetingPresetsByStatementResponse";
import { TargetingPresetService } from "./services/TargetingPresetService";

export interface TargetingPresetServiceClient extends SoapClient {
    TargetingPresetService: TargetingPresetService;
    getTargetingPresetsByStatementAsync(getTargetingPresetsByStatement: GetTargetingPresetsByStatement): Promise<[result: GetTargetingPresetsByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create TargetingPresetServiceClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<TargetingPresetServiceClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
