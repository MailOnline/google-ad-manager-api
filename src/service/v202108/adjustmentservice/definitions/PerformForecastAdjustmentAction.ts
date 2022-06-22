import { ForecastAdjustmentAction } from "./ForecastAdjustmentAction";
import { FilterStatement } from "./FilterStatement";

/** performForecastAdjustmentAction */
export interface PerformForecastAdjustmentAction {
    /** forecastAdjustmentAction */
    forecastAdjustmentAction?: ForecastAdjustmentAction;
    /** filterStatement */
    filterStatement?: FilterStatement;
}
