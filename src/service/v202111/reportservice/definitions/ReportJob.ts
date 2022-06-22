import { ReportQuery } from "./ReportQuery";

/**
 * reportJob
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202111`
 */
export interface ReportJob {
    /** xsd:long */
    id?: string;
    /** reportQuery */
    reportQuery?: ReportQuery;
}
