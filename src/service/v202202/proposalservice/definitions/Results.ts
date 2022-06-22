import { StartDateTime } from "./StartDateTime";

/**
 * results
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202202`
 */
export interface Results {
    /** xsd:long */
    proposalId?: string;
    /** xsd:string */
    comment?: string;
    /** creationTime */
    creationTime?: StartDateTime;
    /** xsd:boolean */
    createdBySeller?: string;
}
