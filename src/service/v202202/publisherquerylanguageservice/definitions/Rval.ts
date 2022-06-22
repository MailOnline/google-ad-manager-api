import { ColumnTypes } from "./ColumnTypes";
import { Rows } from "./Rows";

/**
 * rval
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202202`
 */
export interface Rval {
    /** columnTypes[] */
    columnTypes?: Array<ColumnTypes>;
    /** rows[] */
    rows?: Array<Rows>;
}
