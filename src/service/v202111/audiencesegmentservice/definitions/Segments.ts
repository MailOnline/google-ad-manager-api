import { DataProvider } from "./DataProvider";

/**
 * segments
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202111`
 */
export interface Segments {
    /** xsd:long */
    id?: string;
    /** xsd:string */
    name?: string;
    /** xsd:long */
    categoryIds?: Array<string>;
    /** xsd:string */
    description?: string;
    /** AudienceSegment.Status|xsd:string|ACTIVE,INACTIVE */
    status?: string;
    /** xsd:long */
    size?: string;
    /** xsd:long */
    mobileWebSize?: string;
    /** xsd:long */
    idfaSize?: string;
    /** xsd:long */
    adIdSize?: string;
    /** xsd:long */
    ppidSize?: string;
    /** dataProvider */
    dataProvider?: DataProvider;
    /** AudienceSegment.Type|xsd:string|FIRST_PARTY,SHARED,THIRD_PARTY,UNKNOWN */
    type?: string;
}
