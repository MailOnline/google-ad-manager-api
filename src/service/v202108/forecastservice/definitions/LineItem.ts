import { LineItem1 } from "./LineItem1";
import { ProposalLineItem } from "./ProposalLineItem";

/**
 * lineItem
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202108`
 */
export interface LineItem {
    /** lineItem */
    lineItem?: LineItem1;
    /** proposalLineItem */
    proposalLineItem?: ProposalLineItem;
    /** xsd:long */
    advertiserId?: string;
}
