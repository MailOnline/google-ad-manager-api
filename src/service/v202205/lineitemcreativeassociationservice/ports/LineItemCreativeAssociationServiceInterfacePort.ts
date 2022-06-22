import { CreateLineItemCreativeAssociations } from "../definitions/CreateLineItemCreativeAssociations";
import { CreateLineItemCreativeAssociationsResponse } from "../definitions/CreateLineItemCreativeAssociationsResponse";
import { GetLineItemCreativeAssociationsByStatement } from "../definitions/GetLineItemCreativeAssociationsByStatement";
import { GetLineItemCreativeAssociationsByStatementResponse } from "../definitions/GetLineItemCreativeAssociationsByStatementResponse";
import { GetPreviewUrl } from "../definitions/GetPreviewUrl";
import { GetPreviewUrlResponse } from "../definitions/GetPreviewUrlResponse";
import { GetPreviewUrlsForNativeStyles } from "../definitions/GetPreviewUrlsForNativeStyles";
import { GetPreviewUrlsForNativeStylesResponse } from "../definitions/GetPreviewUrlsForNativeStylesResponse";
import { PerformLineItemCreativeAssociationAction } from "../definitions/PerformLineItemCreativeAssociationAction";
import { PerformLineItemCreativeAssociationActionResponse } from "../definitions/PerformLineItemCreativeAssociationActionResponse";
import { PushCreativeToDevices } from "../definitions/PushCreativeToDevices";
import { PushCreativeToDevicesResponse } from "../definitions/PushCreativeToDevicesResponse";
import { UpdateLineItemCreativeAssociations } from "../definitions/UpdateLineItemCreativeAssociations";
import { UpdateLineItemCreativeAssociationsResponse } from "../definitions/UpdateLineItemCreativeAssociationsResponse";

export interface LineItemCreativeAssociationServiceInterfacePort {
    createLineItemCreativeAssociations(createLineItemCreativeAssociations: CreateLineItemCreativeAssociations, callback: (err: any, result: CreateLineItemCreativeAssociationsResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getLineItemCreativeAssociationsByStatement(getLineItemCreativeAssociationsByStatement: GetLineItemCreativeAssociationsByStatement, callback: (err: any, result: GetLineItemCreativeAssociationsByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getPreviewUrl(getPreviewUrl: GetPreviewUrl, callback: (err: any, result: GetPreviewUrlResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getPreviewUrlsForNativeStyles(getPreviewUrlsForNativeStyles: GetPreviewUrlsForNativeStyles, callback: (err: any, result: GetPreviewUrlsForNativeStylesResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    performLineItemCreativeAssociationAction(performLineItemCreativeAssociationAction: PerformLineItemCreativeAssociationAction, callback: (err: any, result: PerformLineItemCreativeAssociationActionResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    pushCreativeToDevices(pushCreativeToDevices: PushCreativeToDevices, callback: (err: any, result: PushCreativeToDevicesResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    updateLineItemCreativeAssociations(updateLineItemCreativeAssociations: UpdateLineItemCreativeAssociations, callback: (err: any, result: UpdateLineItemCreativeAssociationsResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
