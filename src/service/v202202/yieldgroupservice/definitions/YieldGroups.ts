import { Targeting } from "./Targeting";
import { AdSources } from "./AdSources";

/**
 * yieldGroups
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202202`
 */
export interface YieldGroups {
    /** xsd:long */
    yieldGroupId?: string;
    /** xsd:string */
    yieldGroupName?: string;
    /** YieldEntityStatus|xsd:string|UNKNOWN,ACTIVE,INACTIVE,DELETED */
    exchangeStatus?: string;
    /** YieldFormat|xsd:string|UNKNOWN,BANNER,INTERSTITIAL,NATIVE,VIDEO_VAST,REWARDED,REWARDED_INTERSTITIAL */
    format?: string;
    /** YieldEnvironmentType|xsd:string|UNKNOWN,MOBILE,VIDEO_VAST,WEB */
    environmentType?: string;
    /** targeting */
    targeting?: Targeting;
    /** adSources[] */
    adSources?: Array<AdSources>;
}
