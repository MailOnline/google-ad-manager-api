import { KeyAction } from "./KeyAction";
import { Statement } from "./Statement";

/** performCmsMetadataKeyAction */
export interface PerformCmsMetadataKeyAction {
    /** keyAction */
    keyAction?: KeyAction;
    /** filterStatement */
    filterStatement?: Statement;
}
