import { Settings } from "./Settings";

/**
 * rval
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202205`
 */
export interface Rval1 {
    /** xsd:long */
    companyId?: string;
    /** settings[] */
    settings?: Array<Settings>;
}
