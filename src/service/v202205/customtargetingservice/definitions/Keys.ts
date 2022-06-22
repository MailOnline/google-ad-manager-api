
/**
 * keys
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202205`
 */
export interface Keys {
    /** xsd:long */
    id?: string;
    /** xsd:string */
    name?: string;
    /** xsd:string */
    displayName?: string;
    /** CustomTargetingKey.Type|xsd:string|PREDEFINED,FREEFORM */
    type?: string;
    /** ValueDeclarationType|xsd:string|NON_USER_DATA,USER_DATA,USER_ID */
    valueDeclarationType?: string;
    /** CustomTargetingKey.Status|xsd:string|ACTIVE,INACTIVE,UNKNOWN */
    status?: string;
    /** ReportableType|xsd:string|UNKNOWN,ON,OFF,CUSTOM_DIMENSION */
    reportableType?: string;
}
