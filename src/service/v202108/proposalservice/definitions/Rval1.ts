import { Proposals } from "./Proposals";

/**
 * rval
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202108`
 */
export interface Rval1 {
    /** xsd:int */
    totalResultSetSize?: string;
    /** xsd:int */
    startIndex?: string;
    /** results[] */
    results?: Array<Proposals>;
}
