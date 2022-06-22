import { Slates } from "./Slates";

/**
 * rval
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202202`
 */
export interface Rval1 {
    /** xsd:int */
    totalResultSetSize?: string;
    /** xsd:int */
    startIndex?: string;
    /** results[] */
    results?: Array<Slates>;
}
