import { DisapprovalReasons } from "./DisapprovalReasons";

/**
 * sites
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202205`
 */
export interface Sites {
    /** xsd:long */
    id?: string;
    /** xsd:string */
    url?: string;
    /** xsd:string */
    childNetworkCode?: string;
    /** ApprovalStatus|xsd:string|DRAFT,UNCHECKED,APPROVED,DISAPPROVED,REQUIRES_REVIEW,UNKNOWN */
    approvalStatus?: string;
    /** xsd:boolean */
    active?: string;
    /** disapprovalReasons[] */
    disapprovalReasons?: Array<DisapprovalReasons>;
}
