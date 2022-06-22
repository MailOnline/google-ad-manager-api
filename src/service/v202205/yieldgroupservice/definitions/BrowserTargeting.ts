import { BandwidthGroups } from "./BandwidthGroups";

/**
 * browserTargeting
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202205`
 */
export interface BrowserTargeting {
    /** xsd:boolean */
    isTargeted?: string;
    /** browsers[] */
    browsers?: Array<BandwidthGroups>;
}
