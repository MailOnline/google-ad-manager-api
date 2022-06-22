import { ForecastOptions1 } from "./ForecastOptions1";

/** getDeliveryForecastByIds */
export interface GetDeliveryForecastByIds {
    /** xsd:long */
    lineItemIds?: Array<string>;
    /** forecastOptions */
    forecastOptions?: ForecastOptions1;
}
