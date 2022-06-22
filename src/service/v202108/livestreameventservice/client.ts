import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { CreateLiveStreamEvents } from "./definitions/CreateLiveStreamEvents";
import { CreateLiveStreamEventsResponse } from "./definitions/CreateLiveStreamEventsResponse";
import { CreateSlates } from "./definitions/CreateSlates";
import { CreateSlatesResponse } from "./definitions/CreateSlatesResponse";
import { GetLiveStreamEventsByStatement } from "./definitions/GetLiveStreamEventsByStatement";
import { GetLiveStreamEventsByStatementResponse } from "./definitions/GetLiveStreamEventsByStatementResponse";
import { GetSlatesByStatement } from "./definitions/GetSlatesByStatement";
import { GetSlatesByStatementResponse } from "./definitions/GetSlatesByStatementResponse";
import { PerformLiveStreamEventAction } from "./definitions/PerformLiveStreamEventAction";
import { PerformLiveStreamEventActionResponse } from "./definitions/PerformLiveStreamEventActionResponse";
import { PerformSlateAction } from "./definitions/PerformSlateAction";
import { PerformSlateActionResponse } from "./definitions/PerformSlateActionResponse";
import { UpdateLiveStreamEvents } from "./definitions/UpdateLiveStreamEvents";
import { UpdateLiveStreamEventsResponse } from "./definitions/UpdateLiveStreamEventsResponse";
import { UpdateSlates } from "./definitions/UpdateSlates";
import { UpdateSlatesResponse } from "./definitions/UpdateSlatesResponse";
import { LiveStreamEventService } from "./services/LiveStreamEventService";

export interface LiveStreamEventServiceClient extends SoapClient {
    LiveStreamEventService: LiveStreamEventService;
    createLiveStreamEventsAsync(createLiveStreamEvents: CreateLiveStreamEvents): Promise<[result: CreateLiveStreamEventsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    createSlatesAsync(createSlates: CreateSlates): Promise<[result: CreateSlatesResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getLiveStreamEventsByStatementAsync(getLiveStreamEventsByStatement: GetLiveStreamEventsByStatement): Promise<[result: GetLiveStreamEventsByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getSlatesByStatementAsync(getSlatesByStatement: GetSlatesByStatement): Promise<[result: GetSlatesByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    performLiveStreamEventActionAsync(performLiveStreamEventAction: PerformLiveStreamEventAction): Promise<[result: PerformLiveStreamEventActionResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    performSlateActionAsync(performSlateAction: PerformSlateAction): Promise<[result: PerformSlateActionResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    updateLiveStreamEventsAsync(updateLiveStreamEvents: UpdateLiveStreamEvents): Promise<[result: UpdateLiveStreamEventsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    updateSlatesAsync(updateSlates: UpdateSlates): Promise<[result: UpdateSlatesResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create LiveStreamEventServiceClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<LiveStreamEventServiceClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
