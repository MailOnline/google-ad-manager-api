import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { CreateLineItemCreativeAssociations } from "./definitions/CreateLineItemCreativeAssociations";
import { CreateLineItemCreativeAssociationsResponse } from "./definitions/CreateLineItemCreativeAssociationsResponse";
import { GetLineItemCreativeAssociationsByStatement } from "./definitions/GetLineItemCreativeAssociationsByStatement";
import { GetLineItemCreativeAssociationsByStatementResponse } from "./definitions/GetLineItemCreativeAssociationsByStatementResponse";
import { GetPreviewUrl } from "./definitions/GetPreviewUrl";
import { GetPreviewUrlResponse } from "./definitions/GetPreviewUrlResponse";
import { GetPreviewUrlsForNativeStyles } from "./definitions/GetPreviewUrlsForNativeStyles";
import { GetPreviewUrlsForNativeStylesResponse } from "./definitions/GetPreviewUrlsForNativeStylesResponse";
import { PerformLineItemCreativeAssociationAction } from "./definitions/PerformLineItemCreativeAssociationAction";
import { PerformLineItemCreativeAssociationActionResponse } from "./definitions/PerformLineItemCreativeAssociationActionResponse";
import { PushCreativeToDevices } from "./definitions/PushCreativeToDevices";
import { PushCreativeToDevicesResponse } from "./definitions/PushCreativeToDevicesResponse";
import { UpdateLineItemCreativeAssociations } from "./definitions/UpdateLineItemCreativeAssociations";
import { UpdateLineItemCreativeAssociationsResponse } from "./definitions/UpdateLineItemCreativeAssociationsResponse";
import { LineItemCreativeAssociationService } from "./services/LineItemCreativeAssociationService";

export interface LineItemCreativeAssociationServiceClient extends SoapClient {
    LineItemCreativeAssociationService: LineItemCreativeAssociationService;
    createLineItemCreativeAssociationsAsync(createLineItemCreativeAssociations: CreateLineItemCreativeAssociations): Promise<[result: CreateLineItemCreativeAssociationsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getLineItemCreativeAssociationsByStatementAsync(getLineItemCreativeAssociationsByStatement: GetLineItemCreativeAssociationsByStatement): Promise<[result: GetLineItemCreativeAssociationsByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getPreviewUrlAsync(getPreviewUrl: GetPreviewUrl): Promise<[result: GetPreviewUrlResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getPreviewUrlsForNativeStylesAsync(getPreviewUrlsForNativeStyles: GetPreviewUrlsForNativeStyles): Promise<[result: GetPreviewUrlsForNativeStylesResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    performLineItemCreativeAssociationActionAsync(performLineItemCreativeAssociationAction: PerformLineItemCreativeAssociationAction): Promise<[result: PerformLineItemCreativeAssociationActionResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    pushCreativeToDevicesAsync(pushCreativeToDevices: PushCreativeToDevices): Promise<[result: PushCreativeToDevicesResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    updateLineItemCreativeAssociationsAsync(updateLineItemCreativeAssociations: UpdateLineItemCreativeAssociations): Promise<[result: UpdateLineItemCreativeAssociationsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create LineItemCreativeAssociationServiceClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<LineItemCreativeAssociationServiceClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
