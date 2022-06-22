import { Targeting } from "./Targeting";
import { CreativePlaceholders } from "./CreativePlaceholders";

/**
 * targets
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202111`
 */
export interface Targets {
    /** xsd:string */
    name?: string;
    /** targeting */
    targeting?: Targeting;
    /** creative */
    creative?: CreativePlaceholders;
}
