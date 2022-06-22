import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { GetReportDownloadUrl } from "./definitions/GetReportDownloadUrl";
import { GetReportDownloadUrlResponse } from "./definitions/GetReportDownloadUrlResponse";
import { GetReportDownloadUrlWithOptions } from "./definitions/GetReportDownloadUrlWithOptions";
import { GetReportDownloadUrlWithOptionsResponse } from "./definitions/GetReportDownloadUrlWithOptionsResponse";
import { GetReportJobStatus } from "./definitions/GetReportJobStatus";
import { GetReportJobStatusResponse } from "./definitions/GetReportJobStatusResponse";
import { GetSavedQueriesByStatement } from "./definitions/GetSavedQueriesByStatement";
import { GetSavedQueriesByStatementResponse } from "./definitions/GetSavedQueriesByStatementResponse";
import { RunReportJob } from "./definitions/RunReportJob";
import { RunReportJobResponse } from "./definitions/RunReportJobResponse";
import { ReportService } from "./services/ReportService";

export interface ReportServiceClient extends SoapClient {
    ReportService: ReportService;
    getReportDownloadURLAsync(getReportDownloadUrl: GetReportDownloadUrl): Promise<[result: GetReportDownloadUrlResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getReportDownloadUrlWithOptionsAsync(getReportDownloadUrlWithOptions: GetReportDownloadUrlWithOptions): Promise<[result: GetReportDownloadUrlWithOptionsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getReportJobStatusAsync(getReportJobStatus: GetReportJobStatus): Promise<[result: GetReportJobStatusResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getSavedQueriesByStatementAsync(getSavedQueriesByStatement: GetSavedQueriesByStatement): Promise<[result: GetSavedQueriesByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    runReportJobAsync(runReportJob: RunReportJob): Promise<[result: RunReportJobResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create ReportServiceClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<ReportServiceClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
