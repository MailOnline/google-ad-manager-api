import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { CreateNativeStyles } from "./definitions/CreateNativeStyles";
import { CreateNativeStylesResponse } from "./definitions/CreateNativeStylesResponse";
import { GetNativeStylesByStatement } from "./definitions/GetNativeStylesByStatement";
import { GetNativeStylesByStatementResponse } from "./definitions/GetNativeStylesByStatementResponse";
import { PerformNativeStyleAction } from "./definitions/PerformNativeStyleAction";
import { PerformNativeStyleActionResponse } from "./definitions/PerformNativeStyleActionResponse";
import { UpdateNativeStyles } from "./definitions/UpdateNativeStyles";
import { UpdateNativeStylesResponse } from "./definitions/UpdateNativeStylesResponse";
import { NativeStyleService } from "./services/NativeStyleService";

export interface NativeStyleServiceClient extends SoapClient {
    NativeStyleService: NativeStyleService;
    createNativeStylesAsync(createNativeStyles: CreateNativeStyles): Promise<[result: CreateNativeStylesResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getNativeStylesByStatementAsync(getNativeStylesByStatement: GetNativeStylesByStatement): Promise<[result: GetNativeStylesByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    performNativeStyleActionAsync(performNativeStyleAction: PerformNativeStyleAction): Promise<[result: PerformNativeStyleActionResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    updateNativeStylesAsync(updateNativeStyles: UpdateNativeStyles): Promise<[result: UpdateNativeStylesResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create NativeStyleServiceClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<NativeStyleServiceClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
