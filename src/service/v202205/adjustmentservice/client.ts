import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { CalculateDailyAdOpportunityCounts } from "./definitions/CalculateDailyAdOpportunityCounts";
import { CalculateDailyAdOpportunityCountsResponse } from "./definitions/CalculateDailyAdOpportunityCountsResponse";
import { CreateForecastAdjustments } from "./definitions/CreateForecastAdjustments";
import { CreateForecastAdjustmentsResponse } from "./definitions/CreateForecastAdjustmentsResponse";
import { CreateTrafficForecastSegments } from "./definitions/CreateTrafficForecastSegments";
import { CreateTrafficForecastSegmentsResponse } from "./definitions/CreateTrafficForecastSegmentsResponse";
import { GetForecastAdjustmentsByStatement } from "./definitions/GetForecastAdjustmentsByStatement";
import { GetForecastAdjustmentsByStatementResponse } from "./definitions/GetForecastAdjustmentsByStatementResponse";
import { GetTrafficForecastSegmentsByStatement } from "./definitions/GetTrafficForecastSegmentsByStatement";
import { GetTrafficForecastSegmentsByStatementResponse } from "./definitions/GetTrafficForecastSegmentsByStatementResponse";
import { PerformForecastAdjustmentAction } from "./definitions/PerformForecastAdjustmentAction";
import { PerformForecastAdjustmentActionResponse } from "./definitions/PerformForecastAdjustmentActionResponse";
import { UpdateForecastAdjustments } from "./definitions/UpdateForecastAdjustments";
import { UpdateForecastAdjustmentsResponse } from "./definitions/UpdateForecastAdjustmentsResponse";
import { UpdateTrafficForecastSegments } from "./definitions/UpdateTrafficForecastSegments";
import { UpdateTrafficForecastSegmentsResponse } from "./definitions/UpdateTrafficForecastSegmentsResponse";
import { AdjustmentService } from "./services/AdjustmentService";

export interface AdjustmentServiceClient extends SoapClient {
    AdjustmentService: AdjustmentService;
    calculateDailyAdOpportunityCountsAsync(calculateDailyAdOpportunityCounts: CalculateDailyAdOpportunityCounts): Promise<[result: CalculateDailyAdOpportunityCountsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    createForecastAdjustmentsAsync(createForecastAdjustments: CreateForecastAdjustments): Promise<[result: CreateForecastAdjustmentsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    createTrafficForecastSegmentsAsync(createTrafficForecastSegments: CreateTrafficForecastSegments): Promise<[result: CreateTrafficForecastSegmentsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getForecastAdjustmentsByStatementAsync(getForecastAdjustmentsByStatement: GetForecastAdjustmentsByStatement): Promise<[result: GetForecastAdjustmentsByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getTrafficForecastSegmentsByStatementAsync(getTrafficForecastSegmentsByStatement: GetTrafficForecastSegmentsByStatement): Promise<[result: GetTrafficForecastSegmentsByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    performForecastAdjustmentActionAsync(performForecastAdjustmentAction: PerformForecastAdjustmentAction): Promise<[result: PerformForecastAdjustmentActionResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    updateForecastAdjustmentsAsync(updateForecastAdjustments: UpdateForecastAdjustments): Promise<[result: UpdateForecastAdjustmentsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    updateTrafficForecastSegmentsAsync(updateTrafficForecastSegments: UpdateTrafficForecastSegments): Promise<[result: UpdateTrafficForecastSegmentsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create AdjustmentServiceClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<AdjustmentServiceClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
