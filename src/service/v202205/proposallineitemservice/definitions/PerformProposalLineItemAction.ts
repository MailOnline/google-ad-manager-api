import { ProposalLineItemAction } from "./ProposalLineItemAction";
import { FilterStatement } from "./FilterStatement";

/** performProposalLineItemAction */
export interface PerformProposalLineItemAction {
    /** proposalLineItemAction */
    proposalLineItemAction?: ProposalLineItemAction;
    /** filterStatement */
    filterStatement?: FilterStatement;
}
