import { VideoSettings } from "./VideoSettings";
import { AudioSettings } from "./AudioSettings";

/**
 * daiEncodingProfiles
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202108`
 */
export interface DaiEncodingProfiles {
    /** xsd:long */
    id?: string;
    /** xsd:string */
    name?: string;
    /** DaiEncodingProfileStatus|xsd:string|ACTIVE,ARCHIVED,UNKNOWN */
    status?: string;
    /** VariantType|xsd:string|MEDIA,IFRAME,SUBTITLES,UNKNOWN */
    variantType?: string;
    /** ContainerType|xsd:string|TS,FMP4,HLS_AUDIO,UNKNOWN */
    containerType?: string;
    /** videoSettings */
    videoSettings?: VideoSettings;
    /** audioSettings */
    audioSettings?: AudioSettings;
    /** xsd:boolean */
    persistUnmatchedProfiles?: string;
}
