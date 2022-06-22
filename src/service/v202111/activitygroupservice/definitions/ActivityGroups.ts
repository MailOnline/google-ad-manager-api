
/**
 * activityGroups
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202111`
 */
export interface ActivityGroups {
    /** xsd:long */
    id?: string;
    /** xsd:string */
    name?: string;
    /** xsd:long */
    companyIds?: Array<string>;
    /** xsd:int */
    impressionsLookback?: string;
    /** xsd:int */
    clicksLookback?: string;
    /** ActivityGroup.Status|xsd:string|ACTIVE,INACTIVE */
    status?: string;
}
