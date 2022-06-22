import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { GetCreativeTemplatesByStatement } from "./definitions/GetCreativeTemplatesByStatement";
import { GetCreativeTemplatesByStatementResponse } from "./definitions/GetCreativeTemplatesByStatementResponse";
import { CreativeTemplateService } from "./services/CreativeTemplateService";

export interface CreativeTemplateServiceClient extends SoapClient {
    CreativeTemplateService: CreativeTemplateService;
    getCreativeTemplatesByStatementAsync(getCreativeTemplatesByStatement: GetCreativeTemplatesByStatement): Promise<[result: GetCreativeTemplatesByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create CreativeTemplateServiceClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<CreativeTemplateServiceClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
