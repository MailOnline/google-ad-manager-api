
/**
 * teams
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202111`
 */
export interface Teams {
    /** xsd:long */
    id?: string;
    /** xsd:string */
    name?: string;
    /** xsd:string */
    description?: string;
    /** TeamStatus|xsd:string|ACTIVE,INACTIVE,UNKNOWN */
    status?: string;
    /** xsd:boolean */
    hasAllCompanies?: string;
    /** xsd:boolean */
    hasAllInventory?: string;
    /** TeamAccessType|xsd:string|NONE,READ_ONLY,READ_WRITE */
    teamAccessType?: string;
}
