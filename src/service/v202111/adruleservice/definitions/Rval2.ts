import { BreakTemplate } from "./BreakTemplate";

/**
 * rval
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202111`
 */
export interface Rval2 {
    /** xsd:int */
    totalResultSetSize?: string;
    /** xsd:int */
    startIndex?: string;
    /** results[] */
    results?: Array<BreakTemplate>;
}
