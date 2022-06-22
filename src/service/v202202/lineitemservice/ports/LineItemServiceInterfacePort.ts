import { CreateLineItems } from "../definitions/CreateLineItems";
import { CreateLineItemsResponse } from "../definitions/CreateLineItemsResponse";
import { GetLineItemsByStatement } from "../definitions/GetLineItemsByStatement";
import { GetLineItemsByStatementResponse } from "../definitions/GetLineItemsByStatementResponse";
import { PerformLineItemAction } from "../definitions/PerformLineItemAction";
import { PerformLineItemActionResponse } from "../definitions/PerformLineItemActionResponse";
import { UpdateLineItems } from "../definitions/UpdateLineItems";
import { UpdateLineItemsResponse } from "../definitions/UpdateLineItemsResponse";

export interface LineItemServiceInterfacePort {
    createLineItems(createLineItems: CreateLineItems, callback: (err: any, result: CreateLineItemsResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getLineItemsByStatement(getLineItemsByStatement: GetLineItemsByStatement, callback: (err: any, result: GetLineItemsByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    performLineItemAction(performLineItemAction: PerformLineItemAction, callback: (err: any, result: PerformLineItemActionResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    updateLineItems(updateLineItems: UpdateLineItems, callback: (err: any, result: UpdateLineItemsResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
