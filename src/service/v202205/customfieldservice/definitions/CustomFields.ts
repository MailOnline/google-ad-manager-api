
/**
 * customFields
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202205`
 */
export interface CustomFields {
    /** xsd:long */
    id?: string;
    /** xsd:string */
    name?: string;
    /** xsd:string */
    description?: string;
    /** xsd:boolean */
    isActive?: string;
    /** CustomFieldEntityType|xsd:string|LINE_ITEM,ORDER,CREATIVE,PRODUCT_TEMPLATE,PRODUCT,PROPOSAL,PROPOSAL_LINE_ITEM,UNKNOWN */
    entityType?: string;
    /** CustomFieldDataType|xsd:string|STRING,NUMBER,TOGGLE,DROP_DOWN,UNKNOWN */
    dataType?: string;
    /** CustomFieldVisibility|xsd:string|API_ONLY,READ_ONLY,FULL */
    visibility?: string;
}
