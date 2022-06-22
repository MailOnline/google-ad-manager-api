import { ActivityGroups } from "./ActivityGroups";

/**
 * rval
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202111`
 */
export interface Rval {
    /** xsd:int */
    totalResultSetSize?: string;
    /** xsd:int */
    startIndex?: string;
    /** results[] */
    results?: Array<ActivityGroups>;
}
