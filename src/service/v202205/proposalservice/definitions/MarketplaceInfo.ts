
/**
 * marketplaceInfo
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202205`
 */
export interface MarketplaceInfo {
    /** xsd:boolean */
    hasLocalVersionEdits?: string;
    /** NegotiationStatus|xsd:string|SELLER_INITIATED,BUYER_INITIATED,AWAITING_SELLER_REVIEW,AWAITING_BUYER_REVIEW,ONLY_SELLER_ACCEPTED,FINALIZED,CANCELLED,UNKNOWN */
    negotiationStatus?: string;
    /** xsd:string */
    marketplaceComment?: string;
    /** xsd:boolean */
    isNewVersionFromBuyer?: string;
    /** xsd:long */
    buyerAccountId?: string;
    /** xsd:string */
    partnerClientId?: string;
}
