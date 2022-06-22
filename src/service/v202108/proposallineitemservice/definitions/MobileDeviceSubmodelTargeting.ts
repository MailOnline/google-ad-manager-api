import { BandwidthGroups } from "./BandwidthGroups";

/**
 * mobileDeviceSubmodelTargeting
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202108`
 */
export interface MobileDeviceSubmodelTargeting {
    /** targetedMobileDeviceSubmodels[] */
    targetedMobileDeviceSubmodels?: Array<BandwidthGroups>;
    /** excludedMobileDeviceSubmodels[] */
    excludedMobileDeviceSubmodels?: Array<BandwidthGroups>;
}
