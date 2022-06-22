import { Results } from "./Results";

/**
 * rval
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202111`
 */
export interface Rval {
    /** xsd:int */
    startIndex?: string;
    /** results[] */
    results?: Array<Results>;
}
