import { BandwidthGroups } from "./BandwidthGroups";

/**
 * deviceCategoryTargeting
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202111`
 */
export interface DeviceCategoryTargeting {
    /** targetedDeviceCategories[] */
    targetedDeviceCategories?: Array<BandwidthGroups>;
    /** excludedDeviceCategories[] */
    excludedDeviceCategories?: Array<BandwidthGroups>;
}
