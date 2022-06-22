import { TargetedAdUnits } from "./TargetedAdUnits";

/**
 * inventoryTargeting
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202205`
 */
export interface InventoryTargeting {
    /** targetedAdUnits[] */
    targetedAdUnits?: Array<TargetedAdUnits>;
    /** excludedAdUnits[] */
    excludedAdUnits?: Array<TargetedAdUnits>;
    /** xsd:long */
    targetedPlacementIds?: Array<string>;
}
