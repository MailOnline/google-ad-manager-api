import { Rval } from "./Rval";

/**
 * rval
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202205`
 */
export interface Rval1 {
    /** results[] */
    results?: Array<Rval>;
    /** xsd:int */
    startIndex?: string;
    /** xsd:int */
    totalResultSetSize?: string;
}
