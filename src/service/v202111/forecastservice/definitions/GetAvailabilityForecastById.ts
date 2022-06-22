import { ForecastOptions } from "./ForecastOptions";

/** getAvailabilityForecastById */
export interface GetAvailabilityForecastById {
    /** xsd:long */
    lineItemId?: string;
    /** forecastOptions */
    forecastOptions?: ForecastOptions;
}
