import { Values1 } from "./Values1";

/**
 * filterStatement
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202108`
 */
export interface FilterStatement {
    /** xsd:string */
    query?: string;
    /** values[] */
    values?: Array<Values1>;
}
