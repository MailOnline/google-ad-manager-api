import { Date } from "./Date";

/**
 * lastModifiedDateTime
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202108`
 */
export interface LastModifiedDateTime {
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
