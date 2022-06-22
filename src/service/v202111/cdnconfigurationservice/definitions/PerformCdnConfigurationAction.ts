import { CdnConfigurationAction } from "./CdnConfigurationAction";
import { Statement } from "./Statement";

/** performCdnConfigurationAction */
export interface PerformCdnConfigurationAction {
    /** cdnConfigurationAction */
    cdnConfigurationAction?: CdnConfigurationAction;
    /** filterStatement */
    filterStatement?: Statement;
}
