
/**
 * values
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202205`
 */
export interface Values {
    /** xsd:long */
    customTargetingKeyId?: string;
    /** xsd:long */
    id?: string;
    /** xsd:string */
    name?: string;
    /** xsd:string */
    displayName?: string;
    /** CustomTargetingValue.MatchType|xsd:string|EXACT,BROAD,PREFIX,BROAD_PREFIX,SUFFIX,CONTAINS,UNKNOWN */
    matchType?: string;
    /** CustomTargetingValue.Status|xsd:string|ACTIVE,INACTIVE,UNKNOWN */
    status?: string;
}
