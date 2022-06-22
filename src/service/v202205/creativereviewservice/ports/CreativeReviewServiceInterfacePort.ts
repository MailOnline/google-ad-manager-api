import { GetCreativeReviewsByStatement } from "../definitions/GetCreativeReviewsByStatement";
import { GetCreativeReviewsByStatementResponse } from "../definitions/GetCreativeReviewsByStatementResponse";
import { PerformCreativeReviewAction } from "../definitions/PerformCreativeReviewAction";
import { PerformCreativeReviewActionResponse } from "../definitions/PerformCreativeReviewActionResponse";

export interface CreativeReviewServiceInterfacePort {
    getCreativeReviewsByStatement(getCreativeReviewsByStatement: GetCreativeReviewsByStatement, callback: (err: any, result: GetCreativeReviewsByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    performCreativeReviewAction(performCreativeReviewAction: PerformCreativeReviewAction, callback: (err: any, result: PerformCreativeReviewActionResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
