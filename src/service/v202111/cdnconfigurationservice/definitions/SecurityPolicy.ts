
/**
 * securityPolicy
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202111`
 */
export interface SecurityPolicy {
    /** SecurityPolicyType|xsd:string|UNKNOWN,NONE,AKAMAI */
    securityPolicyType?: string;
    /** xsd:string */
    tokenAuthenticationKey?: string;
    /** xsd:boolean */
    disableServerSideUrlSigning?: string;
    /** OriginForwardingType|xsd:string|ORIGIN_PATH,CONVENTIONAL,NONE,UNKNOWN */
    originForwardingType?: string;
    /** xsd:string */
    originPathPrefix?: string;
    /** OriginForwardingType|xsd:string|ORIGIN_PATH,CONVENTIONAL,NONE,UNKNOWN */
    mediaPlaylistOriginForwardingType?: string;
    /** xsd:string */
    mediaPlaylistOriginPathPrefix?: string;
}
