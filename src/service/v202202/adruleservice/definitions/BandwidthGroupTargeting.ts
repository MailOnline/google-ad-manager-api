import { BandwidthGroups } from "./BandwidthGroups";

/**
 * bandwidthGroupTargeting
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202202`
 */
export interface BandwidthGroupTargeting {
    /** xsd:boolean */
    isTargeted?: string;
    /** bandwidthGroups[] */
    bandwidthGroups?: Array<BandwidthGroups>;
}
