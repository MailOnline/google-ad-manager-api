import { DisplaySettings } from "./DisplaySettings";
import { ManualCpm } from "./ManualCpm";

/**
 * adSources
 * @targetNSAlias `tns`
 * @targetNamespace `https://www.google.com/apis/ads/publisher/v202202`
 */
export interface AdSources {
    /** xsd:long */
    adSourceId?: string;
    /** xsd:long */
    companyId?: string;
    /** displaySettings */
    displaySettings?: DisplaySettings;
    /** YieldEntityStatus|xsd:string|UNKNOWN,ACTIVE,INACTIVE,DELETED */
    status?: string;
    /** manualCpm */
    manualCpm?: ManualCpm;
    /** xsd:boolean */
    overrideDynamicCpm?: string;
}
