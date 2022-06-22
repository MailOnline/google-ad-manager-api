import { Values } from "./Values";

/**
 * selectStatement
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202202`
 */
export interface SelectStatement {
    /** xsd:string */
    query?: string;
    /** values[] */
    values?: Array<Values>;
}
