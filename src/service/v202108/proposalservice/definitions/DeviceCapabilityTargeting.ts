import { BandwidthGroups } from "./BandwidthGroups";

/**
 * deviceCapabilityTargeting
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202108`
 */
export interface DeviceCapabilityTargeting {
    /** targetedDeviceCapabilities[] */
    targetedDeviceCapabilities?: Array<BandwidthGroups>;
    /** excludedDeviceCapabilities[] */
    excludedDeviceCapabilities?: Array<BandwidthGroups>;
}
