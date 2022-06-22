import { ProposalServiceInterfacePort } from "../ports/ProposalServiceInterfacePort";

export interface ProposalService {
    readonly ProposalServiceInterfacePort: ProposalServiceInterfacePort;
}
