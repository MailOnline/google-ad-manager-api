import { BandwidthGroups } from "./BandwidthGroups";

/**
 * mobileDeviceTargeting
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202111`
 */
export interface MobileDeviceTargeting {
    /** targetedMobileDevices[] */
    targetedMobileDevices?: Array<BandwidthGroups>;
    /** excludedMobileDevices[] */
    excludedMobileDevices?: Array<BandwidthGroups>;
}
