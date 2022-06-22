import { ValueAction } from "./ValueAction";
import { Statement } from "./Statement";

/** performCmsMetadataValueAction */
export interface PerformCmsMetadataValueAction {
    /** valueAction */
    valueAction?: ValueAction;
    /** filterStatement */
    filterStatement?: Statement;
}
