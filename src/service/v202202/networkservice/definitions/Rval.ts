import { ChildPublishers } from "./ChildPublishers";

/**
 * rval
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202202`
 */
export interface Rval {
    /** xsd:long */
    id?: string;
    /** xsd:string */
    displayName?: string;
    /** xsd:string */
    networkCode?: string;
    /** xsd:string */
    propertyCode?: string;
    /** xsd:string */
    timeZone?: string;
    /** xsd:string */
    currencyCode?: string;
    /** xsd:string */
    secondaryCurrencyCodes?: Array<string>;
    /** xsd:string */
    effectiveRootAdUnitId?: string;
    /** xsd:boolean */
    isTest?: string;
    /** childPublishers[] */
    childPublishers?: Array<ChildPublishers>;
}
