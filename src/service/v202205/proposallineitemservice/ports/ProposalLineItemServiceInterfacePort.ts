import { CreateMakegoods } from "../definitions/CreateMakegoods";
import { CreateMakegoodsResponse } from "../definitions/CreateMakegoodsResponse";
import { CreateProposalLineItems } from "../definitions/CreateProposalLineItems";
import { CreateProposalLineItemsResponse } from "../definitions/CreateProposalLineItemsResponse";
import { GetProposalLineItemsByStatement } from "../definitions/GetProposalLineItemsByStatement";
import { GetProposalLineItemsByStatementResponse } from "../definitions/GetProposalLineItemsByStatementResponse";
import { PerformProposalLineItemAction } from "../definitions/PerformProposalLineItemAction";
import { PerformProposalLineItemActionResponse } from "../definitions/PerformProposalLineItemActionResponse";
import { UpdateProposalLineItems } from "../definitions/UpdateProposalLineItems";
import { UpdateProposalLineItemsResponse } from "../definitions/UpdateProposalLineItemsResponse";

export interface ProposalLineItemServiceInterfacePort {
    createMakegoods(createMakegoods: CreateMakegoods, callback: (err: any, result: CreateMakegoodsResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    createProposalLineItems(createProposalLineItems: CreateProposalLineItems, callback: (err: any, result: CreateProposalLineItemsResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getProposalLineItemsByStatement(getProposalLineItemsByStatement: GetProposalLineItemsByStatement, callback: (err: any, result: GetProposalLineItemsByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    performProposalLineItemAction(performProposalLineItemAction: PerformProposalLineItemAction, callback: (err: any, result: PerformProposalLineItemActionResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    updateProposalLineItems(updateProposalLineItems: UpdateProposalLineItems, callback: (err: any, result: UpdateProposalLineItemsResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
