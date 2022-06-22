
/**
 * thirdPartyDataDeclaration
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202108`
 */
export interface ThirdPartyDataDeclaration {
    /** DeclarationType|xsd:string|NONE,DECLARED,UNKNOWN */
    declarationType?: string;
    /** xsd:long */
    thirdPartyCompanyIds?: Array<string>;
}
