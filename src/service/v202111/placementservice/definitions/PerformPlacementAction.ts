import { PlacementAction } from "./PlacementAction";
import { FilterStatement } from "./FilterStatement";

/** performPlacementAction */
export interface PerformPlacementAction {
    /** placementAction */
    placementAction?: PlacementAction;
    /** filterStatement */
    filterStatement?: FilterStatement;
}
