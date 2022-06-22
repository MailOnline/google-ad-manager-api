import { LineItem } from "./LineItem";
import { ForecastOptions } from "./ForecastOptions";

/** getAvailabilityForecast */
export interface GetAvailabilityForecast {
    /** lineItem */
    lineItem?: LineItem;
    /** forecastOptions */
    forecastOptions?: ForecastOptions;
}
