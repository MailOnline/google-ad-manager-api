import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { CreateCreatives } from "./definitions/CreateCreatives";
import { CreateCreativesResponse } from "./definitions/CreateCreativesResponse";
import { GetCreativesByStatement } from "./definitions/GetCreativesByStatement";
import { GetCreativesByStatementResponse } from "./definitions/GetCreativesByStatementResponse";
import { PerformCreativeAction } from "./definitions/PerformCreativeAction";
import { PerformCreativeActionResponse } from "./definitions/PerformCreativeActionResponse";
import { UpdateCreatives } from "./definitions/UpdateCreatives";
import { UpdateCreativesResponse } from "./definitions/UpdateCreativesResponse";
import { CreativeService } from "./services/CreativeService";

export interface CreativeServiceClient extends SoapClient {
    CreativeService: CreativeService;
    createCreativesAsync(createCreatives: CreateCreatives): Promise<[result: CreateCreativesResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getCreativesByStatementAsync(getCreativesByStatement: GetCreativesByStatement): Promise<[result: GetCreativesByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    performCreativeActionAsync(performCreativeAction: PerformCreativeAction): Promise<[result: PerformCreativeActionResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    updateCreativesAsync(updateCreatives: UpdateCreatives): Promise<[result: UpdateCreativesResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create CreativeServiceClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<CreativeServiceClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
