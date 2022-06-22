import { Resolution } from "./Resolution";

/**
 * videoSettings
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202202`
 */
export interface VideoSettings {
    /** xsd:string */
    codec?: string;
    /** xsd:long */
    bitrate?: string;
    /** xsd:double */
    framesPerSecond?: string;
    /** resolution */
    resolution?: Resolution;
}
