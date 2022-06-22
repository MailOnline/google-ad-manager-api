
/**
 * contentTargeting
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202111`
 */
export interface ContentTargeting {
    /** xsd:long */
    targetedContentIds?: Array<string>;
    /** xsd:long */
    excludedContentIds?: Array<string>;
    /** xsd:long */
    targetedVideoContentBundleIds?: Array<string>;
    /** xsd:long */
    excludedVideoContentBundleIds?: Array<string>;
}
