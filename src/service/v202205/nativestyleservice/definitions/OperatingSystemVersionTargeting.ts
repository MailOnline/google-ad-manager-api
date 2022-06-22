import { BandwidthGroups } from "./BandwidthGroups";

/**
 * operatingSystemVersionTargeting
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202205`
 */
export interface OperatingSystemVersionTargeting {
    /** targetedOperatingSystemVersions[] */
    targetedOperatingSystemVersions?: Array<BandwidthGroups>;
    /** excludedOperatingSystemVersions[] */
    excludedOperatingSystemVersions?: Array<BandwidthGroups>;
}
