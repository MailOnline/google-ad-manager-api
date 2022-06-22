import { CreateContentBundles } from "../definitions/CreateContentBundles";
import { CreateContentBundlesResponse } from "../definitions/CreateContentBundlesResponse";
import { GetContentBundlesByStatement } from "../definitions/GetContentBundlesByStatement";
import { GetContentBundlesByStatementResponse } from "../definitions/GetContentBundlesByStatementResponse";
import { PerformContentBundleAction } from "../definitions/PerformContentBundleAction";
import { PerformContentBundleActionResponse } from "../definitions/PerformContentBundleActionResponse";
import { UpdateContentBundles } from "../definitions/UpdateContentBundles";
import { UpdateContentBundlesResponse } from "../definitions/UpdateContentBundlesResponse";

export interface ContentBundleServiceInterfacePort {
    createContentBundles(createContentBundles: CreateContentBundles, callback: (err: any, result: CreateContentBundlesResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getContentBundlesByStatement(getContentBundlesByStatement: GetContentBundlesByStatement, callback: (err: any, result: GetContentBundlesByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    performContentBundleAction(performContentBundleAction: PerformContentBundleAction, callback: (err: any, result: PerformContentBundleActionResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    updateContentBundles(updateContentBundles: UpdateContentBundles, callback: (err: any, result: UpdateContentBundlesResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
