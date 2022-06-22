import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { CreateProposals } from "./definitions/CreateProposals";
import { CreateProposalsResponse } from "./definitions/CreateProposalsResponse";
import { GetMarketplaceCommentsByStatement } from "./definitions/GetMarketplaceCommentsByStatement";
import { GetMarketplaceCommentsByStatementResponse } from "./definitions/GetMarketplaceCommentsByStatementResponse";
import { GetProposalsByStatement } from "./definitions/GetProposalsByStatement";
import { GetProposalsByStatementResponse } from "./definitions/GetProposalsByStatementResponse";
import { PerformProposalAction } from "./definitions/PerformProposalAction";
import { PerformProposalActionResponse } from "./definitions/PerformProposalActionResponse";
import { UpdateProposals } from "./definitions/UpdateProposals";
import { UpdateProposalsResponse } from "./definitions/UpdateProposalsResponse";
import { ProposalService } from "./services/ProposalService";

export interface ProposalServiceClient extends SoapClient {
    ProposalService: ProposalService;
    createProposalsAsync(createProposals: CreateProposals): Promise<[result: CreateProposalsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getMarketplaceCommentsByStatementAsync(getMarketplaceCommentsByStatement: GetMarketplaceCommentsByStatement): Promise<[result: GetMarketplaceCommentsByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getProposalsByStatementAsync(getProposalsByStatement: GetProposalsByStatement): Promise<[result: GetProposalsByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    performProposalActionAsync(performProposalAction: PerformProposalAction): Promise<[result: PerformProposalActionResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    updateProposalsAsync(updateProposals: UpdateProposals): Promise<[result: UpdateProposalsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create ProposalServiceClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<ProposalServiceClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
