import { ReportQuery } from "./ReportQuery";

/**
 * results
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202205`
 */
export interface Results {
    /** xsd:long */
    id?: string;
    /** xsd:string */
    name?: string;
    /** reportQuery */
    reportQuery?: ReportQuery;
    /** xsd:boolean */
    isCompatibleWithApiVersion?: string;
}
