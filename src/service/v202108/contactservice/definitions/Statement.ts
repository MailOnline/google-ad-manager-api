import { Values } from "./Values";

/**
 * statement
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202108`
 */
export interface Statement {
    /** xsd:string */
    query?: string;
    /** values[] */
    values?: Array<Values>;
}
