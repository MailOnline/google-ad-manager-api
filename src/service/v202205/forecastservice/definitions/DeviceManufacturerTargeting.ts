import { BandwidthGroups } from "./BandwidthGroups";

/**
 * deviceManufacturerTargeting
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202205`
 */
export interface DeviceManufacturerTargeting {
    /** xsd:boolean */
    isTargeted?: string;
    /** deviceManufacturers[] */
    deviceManufacturers?: Array<BandwidthGroups>;
}
