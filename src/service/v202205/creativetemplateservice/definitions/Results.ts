import { Variables } from "./Variables";

/**
 * results
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202205`
 */
export interface Results {
    /** xsd:long */
    id?: string;
    /** xsd:string */
    name?: string;
    /** xsd:string */
    description?: string;
    /** variables[] */
    variables?: Array<Variables>;
    /** xsd:string */
    snippet?: string;
    /** CreativeTemplateStatus|xsd:string|ACTIVE,INACTIVE,DELETED */
    status?: string;
    /** CreativeTemplateType|xsd:string|SYSTEM_DEFINED,USER_DEFINED */
    type?: string;
    /** xsd:boolean */
    isInterstitial?: string;
    /** xsd:boolean */
    isNativeEligible?: string;
    /** xsd:boolean */
    isSafeFrameCompatible?: string;
}
