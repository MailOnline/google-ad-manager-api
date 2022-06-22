import { TargetedUrls } from "./TargetedUrls";

/**
 * inventoryUrlTargeting
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202205`
 */
export interface InventoryUrlTargeting {
    /** targetedUrls[] */
    targetedUrls?: Array<TargetedUrls>;
    /** excludedUrls[] */
    excludedUrls?: Array<TargetedUrls>;
}
