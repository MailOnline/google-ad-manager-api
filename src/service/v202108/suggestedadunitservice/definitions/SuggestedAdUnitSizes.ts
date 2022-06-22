import { Size } from "./Size";

/**
 * suggestedAdUnitSizes
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202108`
 */
export interface SuggestedAdUnitSizes {
    /** size */
    size?: Size;
    /** EnvironmentType|xsd:string|BROWSER,VIDEO_PLAYER */
    environmentType?: string;
    /** companions[] */
    companions?: Array<SuggestedAdUnitSizes>;
    /** xsd:string */
    fullDisplayString?: string;
    /** xsd:boolean */
    isAudio?: string;
}
