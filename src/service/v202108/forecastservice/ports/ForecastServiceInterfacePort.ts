import { GetAvailabilityForecast } from "../definitions/GetAvailabilityForecast";
import { GetAvailabilityForecastResponse } from "../definitions/GetAvailabilityForecastResponse";
import { GetAvailabilityForecastById } from "../definitions/GetAvailabilityForecastById";
import { GetAvailabilityForecastByIdResponse } from "../definitions/GetAvailabilityForecastByIdResponse";
import { GetDeliveryForecast } from "../definitions/GetDeliveryForecast";
import { GetDeliveryForecastResponse } from "../definitions/GetDeliveryForecastResponse";
import { GetDeliveryForecastByIds } from "../definitions/GetDeliveryForecastByIds";
import { GetDeliveryForecastByIdsResponse } from "../definitions/GetDeliveryForecastByIdsResponse";
import { GetTrafficData } from "../definitions/GetTrafficData";
import { GetTrafficDataResponse } from "../definitions/GetTrafficDataResponse";

export interface ForecastServiceInterfacePort {
    getAvailabilityForecast(getAvailabilityForecast: GetAvailabilityForecast, callback: (err: any, result: GetAvailabilityForecastResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getAvailabilityForecastById(getAvailabilityForecastById: GetAvailabilityForecastById, callback: (err: any, result: GetAvailabilityForecastByIdResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getDeliveryForecast(getDeliveryForecast: GetDeliveryForecast, callback: (err: any, result: GetDeliveryForecastResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getDeliveryForecastByIds(getDeliveryForecastByIds: GetDeliveryForecastByIds, callback: (err: any, result: GetDeliveryForecastByIdsResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getTrafficData(getTrafficData: GetTrafficData, callback: (err: any, result: GetTrafficDataResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
