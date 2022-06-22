import { Size } from "./Size";

/**
 * adUnitSizes
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202111`
 */
export interface AdUnitSizes {
    /** size */
    size?: Size;
    /** EnvironmentType|xsd:string|BROWSER,VIDEO_PLAYER */
    environmentType?: string;
    /** companions[] */
    companions?: Array<AdUnitSizes>;
    /** xsd:string */
    fullDisplayString?: string;
    /** xsd:boolean */
    isAudio?: string;
}
