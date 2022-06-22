import { Results } from "./Results";

/**
 * results
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202202`
 */
export interface Results1 {
    /** xsd:long */
    cmsMetadataValueId?: string;
    /** xsd:string */
    valueName?: string;
    /** key */
    key?: Results;
    /** CmsMetadataValueStatus|xsd:string|ACTIVE,INACTIVE,ARCHIVED,UNKNOWN */
    status?: string;
}
