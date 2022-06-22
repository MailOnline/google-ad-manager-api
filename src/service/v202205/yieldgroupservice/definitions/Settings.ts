import { Parameters } from "./Parameters";

/**
 * settings
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202205`
 */
export interface Settings {
    /** PartnerSettingStatus|xsd:string|UNKNOWN,PENDING,ACTIVE,DEPRECATED */
    status?: string;
    /** YieldEnvironmentType|xsd:string|UNKNOWN,MOBILE,VIDEO_VAST,WEB */
    environment?: string;
    /** YieldFormat|xsd:string|UNKNOWN,BANNER,INTERSTITIAL,NATIVE,VIDEO_VAST,REWARDED,REWARDED_INTERSTITIAL */
    format?: string;
    /** YieldIntegrationType|xsd:string|UNKNOWN,CUSTOM_EVENT,SDK,OPEN_BIDDING,NETWORK_BIDDING */
    integrationType?: string;
    /** YieldPlatform|xsd:string|UNKNOWN,ANDROID,IOS */
    platform?: string;
    /** parameters[] */
    parameters?: Array<Parameters>;
}
