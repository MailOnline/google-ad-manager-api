import { StartDate } from "./StartDate";

/**
 * startDateTime
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202205`
 */
export interface StartDateTime {
    /** date */
    date?: StartDate;
    /** xsd:int */
    hour?: string;
    /** xsd:int */
    minute?: string;
    /** xsd:int */
    second?: string;
    /** xsd:string */
    timeZoneId?: string;
}
