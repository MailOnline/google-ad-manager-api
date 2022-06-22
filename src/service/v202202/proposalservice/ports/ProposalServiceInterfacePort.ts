import { CreateProposals } from "../definitions/CreateProposals";
import { CreateProposalsResponse } from "../definitions/CreateProposalsResponse";
import { GetMarketplaceCommentsByStatement } from "../definitions/GetMarketplaceCommentsByStatement";
import { GetMarketplaceCommentsByStatementResponse } from "../definitions/GetMarketplaceCommentsByStatementResponse";
import { GetProposalsByStatement } from "../definitions/GetProposalsByStatement";
import { GetProposalsByStatementResponse } from "../definitions/GetProposalsByStatementResponse";
import { PerformProposalAction } from "../definitions/PerformProposalAction";
import { PerformProposalActionResponse } from "../definitions/PerformProposalActionResponse";
import { UpdateProposals } from "../definitions/UpdateProposals";
import { UpdateProposalsResponse } from "../definitions/UpdateProposalsResponse";

export interface ProposalServiceInterfacePort {
    createProposals(createProposals: CreateProposals, callback: (err: any, result: CreateProposalsResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getMarketplaceCommentsByStatement(getMarketplaceCommentsByStatement: GetMarketplaceCommentsByStatement, callback: (err: any, result: GetMarketplaceCommentsByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getProposalsByStatement(getProposalsByStatement: GetProposalsByStatement, callback: (err: any, result: GetProposalsByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    performProposalAction(performProposalAction: PerformProposalAction, callback: (err: any, result: PerformProposalActionResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    updateProposals(updateProposals: UpdateProposals, callback: (err: any, result: UpdateProposalsResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
