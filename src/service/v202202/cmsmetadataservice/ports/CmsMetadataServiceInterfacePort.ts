import { GetCmsMetadataKeysByStatement } from "../definitions/GetCmsMetadataKeysByStatement";
import { GetCmsMetadataKeysByStatementResponse } from "../definitions/GetCmsMetadataKeysByStatementResponse";
import { GetCmsMetadataValuesByStatement } from "../definitions/GetCmsMetadataValuesByStatement";
import { GetCmsMetadataValuesByStatementResponse } from "../definitions/GetCmsMetadataValuesByStatementResponse";
import { PerformCmsMetadataKeyAction } from "../definitions/PerformCmsMetadataKeyAction";
import { PerformCmsMetadataKeyActionResponse } from "../definitions/PerformCmsMetadataKeyActionResponse";
import { PerformCmsMetadataValueAction } from "../definitions/PerformCmsMetadataValueAction";
import { PerformCmsMetadataValueActionResponse } from "../definitions/PerformCmsMetadataValueActionResponse";

export interface CmsMetadataServiceInterfacePort {
    getCmsMetadataKeysByStatement(getCmsMetadataKeysByStatement: GetCmsMetadataKeysByStatement, callback: (err: any, result: GetCmsMetadataKeysByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getCmsMetadataValuesByStatement(getCmsMetadataValuesByStatement: GetCmsMetadataValuesByStatement, callback: (err: any, result: GetCmsMetadataValuesByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    performCmsMetadataKeyAction(performCmsMetadataKeyAction: PerformCmsMetadataKeyAction, callback: (err: any, result: PerformCmsMetadataKeyActionResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    performCmsMetadataValueAction(performCmsMetadataValueAction: PerformCmsMetadataValueAction, callback: (err: any, result: PerformCmsMetadataValueActionResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
