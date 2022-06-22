import { TargetedLocations } from "./TargetedLocations";

/**
 * geoTargeting
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202111`
 */
export interface GeoTargeting {
    /** targetedLocations[] */
    targetedLocations?: Array<TargetedLocations>;
    /** excludedLocations[] */
    excludedLocations?: Array<TargetedLocations>;
}
