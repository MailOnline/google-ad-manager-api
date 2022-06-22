import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { GetContentByStatement } from "./definitions/GetContentByStatement";
import { GetContentByStatementResponse } from "./definitions/GetContentByStatementResponse";
import { ContentService } from "./services/ContentService";

export interface ContentServiceClient extends SoapClient {
    ContentService: ContentService;
    getContentByStatementAsync(getContentByStatement: GetContentByStatement): Promise<[result: GetContentByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create ContentServiceClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<ContentServiceClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
