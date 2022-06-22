
/**
 * disapprovalReasons
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202108`
 */
export interface DisapprovalReasons {
    /** DisapprovalReason.Type|xsd:string|CONTENT,OWNERSHIP,OTHER,UNKNOWN */
    type?: string;
    /** xsd:string */
    details?: string;
}
