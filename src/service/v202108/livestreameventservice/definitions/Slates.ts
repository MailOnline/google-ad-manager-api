import { CreationDateTime } from "./CreationDateTime";

/**
 * slates
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202108`
 */
export interface Slates {
    /** xsd:long */
    id?: string;
    /** xsd:string */
    name?: string;
    /** SlateStatus|xsd:string|ACTIVE,ARCHIVED,UNKNOWN */
    status?: string;
    /** TranscodeStatus|xsd:string|UNKNOWN,NOT_READY,COMPLETED,FAILED,NEEDS_TRANSCODE,IN_PROGRESS */
    transcodeStatus?: string;
    /** xsd:string */
    videoSourceUrl?: string;
    /** lastModifiedDateTime */
    lastModifiedDateTime?: CreationDateTime;
}
