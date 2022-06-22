import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { CreateMakegoods } from "./definitions/CreateMakegoods";
import { CreateMakegoodsResponse } from "./definitions/CreateMakegoodsResponse";
import { CreateProposalLineItems } from "./definitions/CreateProposalLineItems";
import { CreateProposalLineItemsResponse } from "./definitions/CreateProposalLineItemsResponse";
import { GetProposalLineItemsByStatement } from "./definitions/GetProposalLineItemsByStatement";
import { GetProposalLineItemsByStatementResponse } from "./definitions/GetProposalLineItemsByStatementResponse";
import { PerformProposalLineItemAction } from "./definitions/PerformProposalLineItemAction";
import { PerformProposalLineItemActionResponse } from "./definitions/PerformProposalLineItemActionResponse";
import { UpdateProposalLineItems } from "./definitions/UpdateProposalLineItems";
import { UpdateProposalLineItemsResponse } from "./definitions/UpdateProposalLineItemsResponse";
import { ProposalLineItemService } from "./services/ProposalLineItemService";

export interface ProposalLineItemServiceClient extends SoapClient {
    ProposalLineItemService: ProposalLineItemService;
    createMakegoodsAsync(createMakegoods: CreateMakegoods): Promise<[result: CreateMakegoodsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    createProposalLineItemsAsync(createProposalLineItems: CreateProposalLineItems): Promise<[result: CreateProposalLineItemsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getProposalLineItemsByStatementAsync(getProposalLineItemsByStatement: GetProposalLineItemsByStatement): Promise<[result: GetProposalLineItemsByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    performProposalLineItemActionAsync(performProposalLineItemAction: PerformProposalLineItemAction): Promise<[result: PerformProposalLineItemActionResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    updateProposalLineItemsAsync(updateProposalLineItems: UpdateProposalLineItems): Promise<[result: UpdateProposalLineItemsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create ProposalLineItemServiceClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<ProposalLineItemServiceClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
