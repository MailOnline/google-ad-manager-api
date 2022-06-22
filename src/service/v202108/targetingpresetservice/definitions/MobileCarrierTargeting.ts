import { BandwidthGroups } from "./BandwidthGroups";

/**
 * mobileCarrierTargeting
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202108`
 */
export interface MobileCarrierTargeting {
    /** xsd:boolean */
    isTargeted?: string;
    /** mobileCarriers[] */
    mobileCarriers?: Array<BandwidthGroups>;
}
