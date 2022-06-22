import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { CreateAudienceSegments } from "./definitions/CreateAudienceSegments";
import { CreateAudienceSegmentsResponse } from "./definitions/CreateAudienceSegmentsResponse";
import { GetAudienceSegmentsByStatement } from "./definitions/GetAudienceSegmentsByStatement";
import { GetAudienceSegmentsByStatementResponse } from "./definitions/GetAudienceSegmentsByStatementResponse";
import { PerformAudienceSegmentAction } from "./definitions/PerformAudienceSegmentAction";
import { PerformAudienceSegmentActionResponse } from "./definitions/PerformAudienceSegmentActionResponse";
import { UpdateAudienceSegments } from "./definitions/UpdateAudienceSegments";
import { UpdateAudienceSegmentsResponse } from "./definitions/UpdateAudienceSegmentsResponse";
import { AudienceSegmentService } from "./services/AudienceSegmentService";

export interface AudienceSegmentServiceClient extends SoapClient {
    AudienceSegmentService: AudienceSegmentService;
    createAudienceSegmentsAsync(createAudienceSegments: CreateAudienceSegments): Promise<[result: CreateAudienceSegmentsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getAudienceSegmentsByStatementAsync(getAudienceSegmentsByStatement: GetAudienceSegmentsByStatement): Promise<[result: GetAudienceSegmentsByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    performAudienceSegmentActionAsync(performAudienceSegmentAction: PerformAudienceSegmentAction): Promise<[result: PerformAudienceSegmentActionResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    updateAudienceSegmentsAsync(updateAudienceSegments: UpdateAudienceSegments): Promise<[result: UpdateAudienceSegmentsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create AudienceSegmentServiceClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<AudienceSegmentServiceClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
