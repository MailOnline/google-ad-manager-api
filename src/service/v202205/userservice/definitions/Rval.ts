
/**
 * rval
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202205`
 */
export interface Rval {
    /** xsd:long */
    id?: string;
    /** xsd:string */
    name?: string;
    /** xsd:string */
    description?: string;
    /** RoleStatus|xsd:string|ACTIVE,INACTIVE,UNKNOWN */
    status?: string;
}
