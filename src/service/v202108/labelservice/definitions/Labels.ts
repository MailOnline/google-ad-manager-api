import { AdCategory } from "./AdCategory";

/**
 * labels
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202108`
 */
export interface Labels {
    /** xsd:long */
    id?: string;
    /** xsd:string */
    name?: string;
    /** xsd:string */
    description?: string;
    /** xsd:boolean */
    isActive?: string;
    /** adCategory */
    adCategory?: AdCategory;
    /** LabelType|xsd:string|COMPETITIVE_EXCLUSION,AD_UNIT_FREQUENCY_CAP,AD_EXCLUSION,CREATIVE_WRAPPER,CANONICAL_CATEGORY,UNKNOWN */
    types?: Array<string>;
}
