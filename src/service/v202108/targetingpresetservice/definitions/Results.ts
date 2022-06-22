import { Targeting } from "./Targeting";

/**
 * results
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202108`
 */
export interface Results {
    /** xsd:long */
    id?: string;
    /** xsd:string */
    name?: string;
    /** targeting */
    targeting?: Targeting;
}
