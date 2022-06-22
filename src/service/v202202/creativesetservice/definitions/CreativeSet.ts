import { LastModifiedDateTime } from "./LastModifiedDateTime";

/**
 * creativeSet
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202202`
 */
export interface CreativeSet {
    /** xsd:long */
    id?: string;
    /** xsd:string */
    name?: string;
    /** xsd:long */
    masterCreativeId?: string;
    /** xsd:long */
    companionCreativeIds?: Array<string>;
    /** lastModifiedDateTime */
    lastModifiedDateTime?: LastModifiedDateTime;
}
