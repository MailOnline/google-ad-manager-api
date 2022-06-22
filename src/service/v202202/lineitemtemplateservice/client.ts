import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { GetLineItemTemplatesByStatement } from "./definitions/GetLineItemTemplatesByStatement";
import { GetLineItemTemplatesByStatementResponse } from "./definitions/GetLineItemTemplatesByStatementResponse";
import { LineItemTemplateService } from "./services/LineItemTemplateService";

export interface LineItemTemplateServiceClient extends SoapClient {
    LineItemTemplateService: LineItemTemplateService;
    getLineItemTemplatesByStatementAsync(getLineItemTemplatesByStatement: GetLineItemTemplatesByStatement): Promise<[result: GetLineItemTemplatesByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create LineItemTemplateServiceClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<LineItemTemplateServiceClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
