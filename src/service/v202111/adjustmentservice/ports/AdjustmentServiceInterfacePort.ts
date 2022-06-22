import { CalculateDailyAdOpportunityCounts } from "../definitions/CalculateDailyAdOpportunityCounts";
import { CalculateDailyAdOpportunityCountsResponse } from "../definitions/CalculateDailyAdOpportunityCountsResponse";
import { CreateForecastAdjustments } from "../definitions/CreateForecastAdjustments";
import { CreateForecastAdjustmentsResponse } from "../definitions/CreateForecastAdjustmentsResponse";
import { CreateTrafficForecastSegments } from "../definitions/CreateTrafficForecastSegments";
import { CreateTrafficForecastSegmentsResponse } from "../definitions/CreateTrafficForecastSegmentsResponse";
import { GetForecastAdjustmentsByStatement } from "../definitions/GetForecastAdjustmentsByStatement";
import { GetForecastAdjustmentsByStatementResponse } from "../definitions/GetForecastAdjustmentsByStatementResponse";
import { GetTrafficForecastSegmentsByStatement } from "../definitions/GetTrafficForecastSegmentsByStatement";
import { GetTrafficForecastSegmentsByStatementResponse } from "../definitions/GetTrafficForecastSegmentsByStatementResponse";
import { PerformForecastAdjustmentAction } from "../definitions/PerformForecastAdjustmentAction";
import { PerformForecastAdjustmentActionResponse } from "../definitions/PerformForecastAdjustmentActionResponse";
import { UpdateForecastAdjustments } from "../definitions/UpdateForecastAdjustments";
import { UpdateForecastAdjustmentsResponse } from "../definitions/UpdateForecastAdjustmentsResponse";
import { UpdateTrafficForecastSegments } from "../definitions/UpdateTrafficForecastSegments";
import { UpdateTrafficForecastSegmentsResponse } from "../definitions/UpdateTrafficForecastSegmentsResponse";

export interface AdjustmentServiceInterfacePort {
    calculateDailyAdOpportunityCounts(calculateDailyAdOpportunityCounts: CalculateDailyAdOpportunityCounts, callback: (err: any, result: CalculateDailyAdOpportunityCountsResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    createForecastAdjustments(createForecastAdjustments: CreateForecastAdjustments, callback: (err: any, result: CreateForecastAdjustmentsResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    createTrafficForecastSegments(createTrafficForecastSegments: CreateTrafficForecastSegments, callback: (err: any, result: CreateTrafficForecastSegmentsResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getForecastAdjustmentsByStatement(getForecastAdjustmentsByStatement: GetForecastAdjustmentsByStatement, callback: (err: any, result: GetForecastAdjustmentsByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getTrafficForecastSegmentsByStatement(getTrafficForecastSegmentsByStatement: GetTrafficForecastSegmentsByStatement, callback: (err: any, result: GetTrafficForecastSegmentsByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    performForecastAdjustmentAction(performForecastAdjustmentAction: PerformForecastAdjustmentAction, callback: (err: any, result: PerformForecastAdjustmentActionResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    updateForecastAdjustments(updateForecastAdjustments: UpdateForecastAdjustments, callback: (err: any, result: UpdateForecastAdjustmentsResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    updateTrafficForecastSegments(updateTrafficForecastSegments: UpdateTrafficForecastSegments, callback: (err: any, result: UpdateTrafficForecastSegmentsResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
