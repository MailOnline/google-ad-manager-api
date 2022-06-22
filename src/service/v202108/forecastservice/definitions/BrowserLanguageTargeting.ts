import { BandwidthGroups } from "./BandwidthGroups";

/**
 * browserLanguageTargeting
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202108`
 */
export interface BrowserLanguageTargeting {
    /** xsd:boolean */
    isTargeted?: string;
    /** browserLanguages[] */
    browserLanguages?: Array<BandwidthGroups>;
}
