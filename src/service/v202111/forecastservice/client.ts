import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { GetAvailabilityForecast } from "./definitions/GetAvailabilityForecast";
import { GetAvailabilityForecastResponse } from "./definitions/GetAvailabilityForecastResponse";
import { GetAvailabilityForecastById } from "./definitions/GetAvailabilityForecastById";
import { GetAvailabilityForecastByIdResponse } from "./definitions/GetAvailabilityForecastByIdResponse";
import { GetDeliveryForecast } from "./definitions/GetDeliveryForecast";
import { GetDeliveryForecastResponse } from "./definitions/GetDeliveryForecastResponse";
import { GetDeliveryForecastByIds } from "./definitions/GetDeliveryForecastByIds";
import { GetDeliveryForecastByIdsResponse } from "./definitions/GetDeliveryForecastByIdsResponse";
import { GetTrafficData } from "./definitions/GetTrafficData";
import { GetTrafficDataResponse } from "./definitions/GetTrafficDataResponse";
import { ForecastService } from "./services/ForecastService";

export interface ForecastServiceClient extends SoapClient {
    ForecastService: ForecastService;
    getAvailabilityForecastAsync(getAvailabilityForecast: GetAvailabilityForecast): Promise<[result: GetAvailabilityForecastResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getAvailabilityForecastByIdAsync(getAvailabilityForecastById: GetAvailabilityForecastById): Promise<[result: GetAvailabilityForecastByIdResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getDeliveryForecastAsync(getDeliveryForecast: GetDeliveryForecast): Promise<[result: GetDeliveryForecastResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getDeliveryForecastByIdsAsync(getDeliveryForecastByIds: GetDeliveryForecastByIds): Promise<[result: GetDeliveryForecastByIdsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getTrafficDataAsync(getTrafficData: GetTrafficData): Promise<[result: GetTrafficDataResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create ForecastServiceClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<ForecastServiceClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
