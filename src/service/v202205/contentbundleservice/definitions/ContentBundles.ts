import { LastModifiedDateTime } from "./LastModifiedDateTime";

/**
 * contentBundles
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202205`
 */
export interface ContentBundles {
    /** xsd:long */
    id?: string;
    /** xsd:string */
    name?: string;
    /** ContentBundleStatus|xsd:string|ACTIVE,INACTIVE,ARCHIVED,UNKNOWN */
    status?: string;
    /** lastModifiedDateTime */
    lastModifiedDateTime?: LastModifiedDateTime;
}
