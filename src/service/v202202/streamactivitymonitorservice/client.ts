import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { GetSamSessionsByStatement } from "./definitions/GetSamSessionsByStatement";
import { GetSamSessionsByStatementResponse } from "./definitions/GetSamSessionsByStatementResponse";
import { RegisterSessionsForMonitoring } from "./definitions/RegisterSessionsForMonitoring";
import { RegisterSessionsForMonitoringResponse } from "./definitions/RegisterSessionsForMonitoringResponse";
import { StreamActivityMonitorService } from "./services/StreamActivityMonitorService";

export interface StreamActivityMonitorServiceClient extends SoapClient {
    StreamActivityMonitorService: StreamActivityMonitorService;
    getSamSessionsByStatementAsync(getSamSessionsByStatement: GetSamSessionsByStatement): Promise<[result: GetSamSessionsByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    registerSessionsForMonitoringAsync(registerSessionsForMonitoring: RegisterSessionsForMonitoring): Promise<[result: RegisterSessionsForMonitoringResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create StreamActivityMonitorServiceClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<StreamActivityMonitorServiceClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
