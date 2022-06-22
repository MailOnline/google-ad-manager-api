
/**
 * advertiser
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202111`
 */
export interface Advertiser {
    /** xsd:long */
    companyId?: string;
    /** ProposalCompanyAssociationType|xsd:string|PRIMARY_AGENCY,BILLING_AGENCY,BRANDING_AGENCY,OTHER_AGENCY,ADVERTISER,UNKNOWN */
    type?: string;
    /** xsd:long */
    contactIds?: Array<string>;
}
