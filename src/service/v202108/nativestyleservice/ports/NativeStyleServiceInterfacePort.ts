import { CreateNativeStyles } from "../definitions/CreateNativeStyles";
import { CreateNativeStylesResponse } from "../definitions/CreateNativeStylesResponse";
import { GetNativeStylesByStatement } from "../definitions/GetNativeStylesByStatement";
import { GetNativeStylesByStatementResponse } from "../definitions/GetNativeStylesByStatementResponse";
import { PerformNativeStyleAction } from "../definitions/PerformNativeStyleAction";
import { PerformNativeStyleActionResponse } from "../definitions/PerformNativeStyleActionResponse";
import { UpdateNativeStyles } from "../definitions/UpdateNativeStyles";
import { UpdateNativeStylesResponse } from "../definitions/UpdateNativeStylesResponse";

export interface NativeStyleServiceInterfacePort {
    createNativeStyles(createNativeStyles: CreateNativeStyles, callback: (err: any, result: CreateNativeStylesResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getNativeStylesByStatement(getNativeStylesByStatement: GetNativeStylesByStatement, callback: (err: any, result: GetNativeStylesByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    performNativeStyleAction(performNativeStyleAction: PerformNativeStyleAction, callback: (err: any, result: PerformNativeStyleActionResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    updateNativeStyles(updateNativeStyles: UpdateNativeStyles, callback: (err: any, result: UpdateNativeStylesResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
