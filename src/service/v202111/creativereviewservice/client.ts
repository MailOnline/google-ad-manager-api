import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { GetCreativeReviewsByStatement } from "./definitions/GetCreativeReviewsByStatement";
import { GetCreativeReviewsByStatementResponse } from "./definitions/GetCreativeReviewsByStatementResponse";
import { PerformCreativeReviewAction } from "./definitions/PerformCreativeReviewAction";
import { PerformCreativeReviewActionResponse } from "./definitions/PerformCreativeReviewActionResponse";
import { CreativeReviewService } from "./services/CreativeReviewService";

export interface CreativeReviewServiceClient extends SoapClient {
    CreativeReviewService: CreativeReviewService;
    getCreativeReviewsByStatementAsync(getCreativeReviewsByStatement: GetCreativeReviewsByStatement): Promise<[result: GetCreativeReviewsByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    performCreativeReviewActionAsync(performCreativeReviewAction: PerformCreativeReviewAction): Promise<[result: PerformCreativeReviewActionResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create CreativeReviewServiceClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<CreativeReviewServiceClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
