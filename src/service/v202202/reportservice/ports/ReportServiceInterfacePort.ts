import { GetReportDownloadUrl } from "../definitions/GetReportDownloadUrl";
import { GetReportDownloadUrlResponse } from "../definitions/GetReportDownloadUrlResponse";
import { GetReportDownloadUrlWithOptions } from "../definitions/GetReportDownloadUrlWithOptions";
import { GetReportDownloadUrlWithOptionsResponse } from "../definitions/GetReportDownloadUrlWithOptionsResponse";
import { GetReportJobStatus } from "../definitions/GetReportJobStatus";
import { GetReportJobStatusResponse } from "../definitions/GetReportJobStatusResponse";
import { GetSavedQueriesByStatement } from "../definitions/GetSavedQueriesByStatement";
import { GetSavedQueriesByStatementResponse } from "../definitions/GetSavedQueriesByStatementResponse";
import { RunReportJob } from "../definitions/RunReportJob";
import { RunReportJobResponse } from "../definitions/RunReportJobResponse";

export interface ReportServiceInterfacePort {
    getReportDownloadURL(getReportDownloadUrl: GetReportDownloadUrl, callback: (err: any, result: GetReportDownloadUrlResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getReportDownloadUrlWithOptions(getReportDownloadUrlWithOptions: GetReportDownloadUrlWithOptions, callback: (err: any, result: GetReportDownloadUrlWithOptionsResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getReportJobStatus(getReportJobStatus: GetReportJobStatus, callback: (err: any, result: GetReportJobStatusResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getSavedQueriesByStatement(getSavedQueriesByStatement: GetSavedQueriesByStatement, callback: (err: any, result: GetSavedQueriesByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    runReportJob(runReportJob: RunReportJob, callback: (err: any, result: RunReportJobResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
