import { Targeting } from "./Targeting";

/**
 * creativeTargetings
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202202`
 */
export interface CreativeTargetings {
    /** xsd:string */
    name?: string;
    /** targeting */
    targeting?: Targeting;
}
