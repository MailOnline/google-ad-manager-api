import { GetSamSessionsByStatement } from "../definitions/GetSamSessionsByStatement";
import { GetSamSessionsByStatementResponse } from "../definitions/GetSamSessionsByStatementResponse";
import { RegisterSessionsForMonitoring } from "../definitions/RegisterSessionsForMonitoring";
import { RegisterSessionsForMonitoringResponse } from "../definitions/RegisterSessionsForMonitoringResponse";

export interface StreamActivityMonitorServiceInterfacePort {
    getSamSessionsByStatement(getSamSessionsByStatement: GetSamSessionsByStatement, callback: (err: any, result: GetSamSessionsByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    registerSessionsForMonitoring(registerSessionsForMonitoring: RegisterSessionsForMonitoring, callback: (err: any, result: RegisterSessionsForMonitoringResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
