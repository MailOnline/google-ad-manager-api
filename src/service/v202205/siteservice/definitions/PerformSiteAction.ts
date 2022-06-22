import { SiteAction } from "./SiteAction";
import { FilterStatement } from "./FilterStatement";

/** performSiteAction */
export interface PerformSiteAction {
    /** siteAction */
    siteAction?: SiteAction;
    /** filterStatement */
    filterStatement?: FilterStatement;
}
