import { ContentBundleAction } from "./ContentBundleAction";
import { FilterStatement } from "./FilterStatement";

/** performContentBundleAction */
export interface PerformContentBundleAction {
    /** contentBundleAction */
    contentBundleAction?: ContentBundleAction;
    /** filterStatement */
    filterStatement?: FilterStatement;
}
