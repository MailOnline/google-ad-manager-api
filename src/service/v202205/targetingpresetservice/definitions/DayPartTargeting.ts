import { DayParts } from "./DayParts";

/**
 * dayPartTargeting
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202205`
 */
export interface DayPartTargeting {
    /** dayParts[] */
    dayParts?: Array<DayParts>;
    /** DeliveryTimeZone|xsd:string|PUBLISHER,BROWSER */
    timeZone?: string;
}
