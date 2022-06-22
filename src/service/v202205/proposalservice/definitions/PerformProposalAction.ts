import { ProposalAction } from "./ProposalAction";
import { FilterStatement } from "./FilterStatement";

/** performProposalAction */
export interface PerformProposalAction {
    /** proposalAction */
    proposalAction?: ProposalAction;
    /** filterStatement */
    filterStatement?: FilterStatement;
}
