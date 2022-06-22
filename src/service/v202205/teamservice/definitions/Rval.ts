import { Teams } from "./Teams";

/**
 * rval
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202205`
 */
export interface Rval {
    /** xsd:int */
    totalResultSetSize?: string;
    /** xsd:int */
    startIndex?: string;
    /** results[] */
    results?: Array<Teams>;
}
