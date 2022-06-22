import { BandwidthGroups } from "./BandwidthGroups";

/**
 * operatingSystemTargeting
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202202`
 */
export interface OperatingSystemTargeting {
    /** xsd:boolean */
    isTargeted?: string;
    /** operatingSystems[] */
    operatingSystems?: Array<BandwidthGroups>;
}
