import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { CreateContentBundles } from "./definitions/CreateContentBundles";
import { CreateContentBundlesResponse } from "./definitions/CreateContentBundlesResponse";
import { GetContentBundlesByStatement } from "./definitions/GetContentBundlesByStatement";
import { GetContentBundlesByStatementResponse } from "./definitions/GetContentBundlesByStatementResponse";
import { PerformContentBundleAction } from "./definitions/PerformContentBundleAction";
import { PerformContentBundleActionResponse } from "./definitions/PerformContentBundleActionResponse";
import { UpdateContentBundles } from "./definitions/UpdateContentBundles";
import { UpdateContentBundlesResponse } from "./definitions/UpdateContentBundlesResponse";
import { ContentBundleService } from "./services/ContentBundleService";

export interface ContentBundleServiceClient extends SoapClient {
    ContentBundleService: ContentBundleService;
    createContentBundlesAsync(createContentBundles: CreateContentBundles): Promise<[result: CreateContentBundlesResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getContentBundlesByStatementAsync(getContentBundlesByStatement: GetContentBundlesByStatement): Promise<[result: GetContentBundlesByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    performContentBundleActionAsync(performContentBundleAction: PerformContentBundleAction): Promise<[result: PerformContentBundleActionResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    updateContentBundlesAsync(updateContentBundles: UpdateContentBundles): Promise<[result: UpdateContentBundlesResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create ContentBundleServiceClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<ContentBundleServiceClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
