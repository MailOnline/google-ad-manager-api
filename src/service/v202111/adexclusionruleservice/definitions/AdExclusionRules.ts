import { InventoryTargeting } from "./InventoryTargeting";

/**
 * adExclusionRules
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202111`
 */
export interface AdExclusionRules {
    /** xsd:long */
    id?: string;
    /** xsd:string */
    name?: string;
    /** xsd:boolean */
    isActive?: string;
    /** inventoryTargeting */
    inventoryTargeting?: InventoryTargeting;
    /** xsd:boolean */
    isBlockAll?: string;
    /** xsd:long */
    blockedLabelIds?: Array<string>;
    /** xsd:long */
    allowedLabelIds?: Array<string>;
    /** AdExclusionRuleType|xsd:string|LABEL,UNKNOWN */
    type?: string;
}
