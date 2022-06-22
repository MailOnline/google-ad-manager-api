import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { CreateLineItems } from "./definitions/CreateLineItems";
import { CreateLineItemsResponse } from "./definitions/CreateLineItemsResponse";
import { GetLineItemsByStatement } from "./definitions/GetLineItemsByStatement";
import { GetLineItemsByStatementResponse } from "./definitions/GetLineItemsByStatementResponse";
import { PerformLineItemAction } from "./definitions/PerformLineItemAction";
import { PerformLineItemActionResponse } from "./definitions/PerformLineItemActionResponse";
import { UpdateLineItems } from "./definitions/UpdateLineItems";
import { UpdateLineItemsResponse } from "./definitions/UpdateLineItemsResponse";
import { LineItemService } from "./services/LineItemService";

export interface LineItemServiceClient extends SoapClient {
    LineItemService: LineItemService;
    createLineItemsAsync(createLineItems: CreateLineItems): Promise<[result: CreateLineItemsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getLineItemsByStatementAsync(getLineItemsByStatement: GetLineItemsByStatement): Promise<[result: GetLineItemsByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    performLineItemActionAsync(performLineItemAction: PerformLineItemAction): Promise<[result: PerformLineItemActionResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    updateLineItemsAsync(updateLineItems: UpdateLineItems): Promise<[result: UpdateLineItemsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create LineItemServiceClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<LineItemServiceClient> {
    console.info(...args)
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
