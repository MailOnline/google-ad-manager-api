import { LiveStreamEventAction } from "./LiveStreamEventAction";
import { FilterStatement } from "./FilterStatement";

/** performLiveStreamEventAction */
export interface PerformLiveStreamEventAction {
    /** liveStreamEventAction */
    liveStreamEventAction?: LiveStreamEventAction;
    /** filterStatement */
    filterStatement?: FilterStatement;
}
