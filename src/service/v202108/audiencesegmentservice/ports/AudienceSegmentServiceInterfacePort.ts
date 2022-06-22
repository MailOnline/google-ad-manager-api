import { CreateAudienceSegments } from "../definitions/CreateAudienceSegments";
import { CreateAudienceSegmentsResponse } from "../definitions/CreateAudienceSegmentsResponse";
import { GetAudienceSegmentsByStatement } from "../definitions/GetAudienceSegmentsByStatement";
import { GetAudienceSegmentsByStatementResponse } from "../definitions/GetAudienceSegmentsByStatementResponse";
import { PerformAudienceSegmentAction } from "../definitions/PerformAudienceSegmentAction";
import { PerformAudienceSegmentActionResponse } from "../definitions/PerformAudienceSegmentActionResponse";
import { UpdateAudienceSegments } from "../definitions/UpdateAudienceSegments";
import { UpdateAudienceSegmentsResponse } from "../definitions/UpdateAudienceSegmentsResponse";

export interface AudienceSegmentServiceInterfacePort {
    createAudienceSegments(createAudienceSegments: CreateAudienceSegments, callback: (err: any, result: CreateAudienceSegmentsResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getAudienceSegmentsByStatement(getAudienceSegmentsByStatement: GetAudienceSegmentsByStatement, callback: (err: any, result: GetAudienceSegmentsByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    performAudienceSegmentAction(performAudienceSegmentAction: PerformAudienceSegmentAction, callback: (err: any, result: PerformAudienceSegmentActionResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    updateAudienceSegments(updateAudienceSegments: UpdateAudienceSegments, callback: (err: any, result: UpdateAudienceSegmentsResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
