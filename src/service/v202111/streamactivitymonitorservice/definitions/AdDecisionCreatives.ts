import { CreativeTranscode } from "./CreativeTranscode";
import { SamError } from "./SamError";

/**
 * adDecisionCreatives
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202111`
 */
export interface AdDecisionCreatives {
    /** xsd:int */
    sequence?: string;
    /** xsd:long */
    slateDurationMills?: string;
    /** xsd:long */
    creativeDurationMills?: string;
    /** creativeTranscode */
    creativeTranscode?: CreativeTranscode;
    /** xsd:string */
    googleVideoId?: string;
    /** samError */
    samError?: SamError;
    /** xsd:boolean */
    isTranscoded?: string;
}
