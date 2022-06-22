import { LineItem } from "./LineItem";
import { ForecastOptions1 } from "./ForecastOptions1";

/** getDeliveryForecast */
export interface GetDeliveryForecast {
    /** lineItems[] */
    lineItems?: Array<LineItem>;
    /** forecastOptions */
    forecastOptions?: ForecastOptions1;
}
