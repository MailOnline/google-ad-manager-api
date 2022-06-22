import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { GetCmsMetadataKeysByStatement } from "./definitions/GetCmsMetadataKeysByStatement";
import { GetCmsMetadataKeysByStatementResponse } from "./definitions/GetCmsMetadataKeysByStatementResponse";
import { GetCmsMetadataValuesByStatement } from "./definitions/GetCmsMetadataValuesByStatement";
import { GetCmsMetadataValuesByStatementResponse } from "./definitions/GetCmsMetadataValuesByStatementResponse";
import { PerformCmsMetadataKeyAction } from "./definitions/PerformCmsMetadataKeyAction";
import { PerformCmsMetadataKeyActionResponse } from "./definitions/PerformCmsMetadataKeyActionResponse";
import { PerformCmsMetadataValueAction } from "./definitions/PerformCmsMetadataValueAction";
import { PerformCmsMetadataValueActionResponse } from "./definitions/PerformCmsMetadataValueActionResponse";
import { CmsMetadataService } from "./services/CmsMetadataService";

export interface CmsMetadataServiceClient extends SoapClient {
    CmsMetadataService: CmsMetadataService;
    getCmsMetadataKeysByStatementAsync(getCmsMetadataKeysByStatement: GetCmsMetadataKeysByStatement): Promise<[result: GetCmsMetadataKeysByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getCmsMetadataValuesByStatementAsync(getCmsMetadataValuesByStatement: GetCmsMetadataValuesByStatement): Promise<[result: GetCmsMetadataValuesByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    performCmsMetadataKeyActionAsync(performCmsMetadataKeyAction: PerformCmsMetadataKeyAction): Promise<[result: PerformCmsMetadataKeyActionResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    performCmsMetadataValueActionAsync(performCmsMetadataValueAction: PerformCmsMetadataValueAction): Promise<[result: PerformCmsMetadataValueActionResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create CmsMetadataServiceClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<CmsMetadataServiceClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
