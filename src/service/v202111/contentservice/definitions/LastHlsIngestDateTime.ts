import { Date } from "./Date";

/**
 * lastHlsIngestDateTime
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202111`
 */
export interface LastHlsIngestDateTime {
    /** date */
    date?: Date;
    /** xsd:int */
    hour?: string;
    /** xsd:int */
    minute?: string;
    /** xsd:int */
    second?: string;
    /** xsd:string */
    timeZoneId?: string;
}
