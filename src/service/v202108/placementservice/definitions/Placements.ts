import { LastModifiedDateTime } from "./LastModifiedDateTime";

/**
 * placements
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202108`
 */
export interface Placements {
    /** xsd:long */
    id?: string;
    /** xsd:string */
    name?: string;
    /** xsd:string */
    description?: string;
    /** xsd:string */
    placementCode?: string;
    /** InventoryStatus|xsd:string|ACTIVE,INACTIVE,ARCHIVED */
    status?: string;
    /** xsd:string */
    targetedAdUnitIds?: Array<string>;
    /** lastModifiedDateTime */
    lastModifiedDateTime?: LastModifiedDateTime;
}
