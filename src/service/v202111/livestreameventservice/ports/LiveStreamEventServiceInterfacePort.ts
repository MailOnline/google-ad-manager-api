import { CreateLiveStreamEvents } from "../definitions/CreateLiveStreamEvents";
import { CreateLiveStreamEventsResponse } from "../definitions/CreateLiveStreamEventsResponse";
import { CreateSlates } from "../definitions/CreateSlates";
import { CreateSlatesResponse } from "../definitions/CreateSlatesResponse";
import { GetLiveStreamEventsByStatement } from "../definitions/GetLiveStreamEventsByStatement";
import { GetLiveStreamEventsByStatementResponse } from "../definitions/GetLiveStreamEventsByStatementResponse";
import { GetSlatesByStatement } from "../definitions/GetSlatesByStatement";
import { GetSlatesByStatementResponse } from "../definitions/GetSlatesByStatementResponse";
import { PerformLiveStreamEventAction } from "../definitions/PerformLiveStreamEventAction";
import { PerformLiveStreamEventActionResponse } from "../definitions/PerformLiveStreamEventActionResponse";
import { PerformSlateAction } from "../definitions/PerformSlateAction";
import { PerformSlateActionResponse } from "../definitions/PerformSlateActionResponse";
import { UpdateLiveStreamEvents } from "../definitions/UpdateLiveStreamEvents";
import { UpdateLiveStreamEventsResponse } from "../definitions/UpdateLiveStreamEventsResponse";
import { UpdateSlates } from "../definitions/UpdateSlates";
import { UpdateSlatesResponse } from "../definitions/UpdateSlatesResponse";

export interface LiveStreamEventServiceInterfacePort {
    createLiveStreamEvents(createLiveStreamEvents: CreateLiveStreamEvents, callback: (err: any, result: CreateLiveStreamEventsResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    createSlates(createSlates: CreateSlates, callback: (err: any, result: CreateSlatesResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getLiveStreamEventsByStatement(getLiveStreamEventsByStatement: GetLiveStreamEventsByStatement, callback: (err: any, result: GetLiveStreamEventsByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getSlatesByStatement(getSlatesByStatement: GetSlatesByStatement, callback: (err: any, result: GetSlatesByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    performLiveStreamEventAction(performLiveStreamEventAction: PerformLiveStreamEventAction, callback: (err: any, result: PerformLiveStreamEventActionResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    performSlateAction(performSlateAction: PerformSlateAction, callback: (err: any, result: PerformSlateActionResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    updateLiveStreamEvents(updateLiveStreamEvents: UpdateLiveStreamEvents, callback: (err: any, result: UpdateLiveStreamEventsResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    updateSlates(updateSlates: UpdateSlates, callback: (err: any, result: UpdateSlatesResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
