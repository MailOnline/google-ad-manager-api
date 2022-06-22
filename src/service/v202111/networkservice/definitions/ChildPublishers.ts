
/**
 * childPublishers
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202111`
 */
export interface ChildPublishers {
    /** DelegationType|xsd:string|UNKNOWN,MANAGE_ACCOUNT,MANAGE_INVENTORY */
    approvedDelegationType?: string;
    /** DelegationType|xsd:string|UNKNOWN,MANAGE_ACCOUNT,MANAGE_INVENTORY */
    proposedDelegationType?: string;
    /** DelegationStatus|xsd:string|UNKNOWN,APPROVED,PENDING,REJECTED,WITHDRAWN */
    status?: string;
    /** AccountStatus|xsd:string|UNKNOWN,INVITED,DECLINED,PENDING_GOOGLE_APPROVAL,APPROVED,CLOSED_POLICY_VIOLATION,CLOSED_INVALID_ACTIVITY,CLOSED_BY_PUBLISHER,DISAPPROVED_INELIGIBLE,DISAPPROVED_DUPLICATE_ACCOUNT,EXPIRED,INACTIVE,DEACTIVATED_BY_AD_MANAGER */
    accountStatus?: string;
    /** xsd:string */
    childNetworkCode?: string;
    /** xsd:long */
    proposedRevenueShareMillipercent?: string;
}
