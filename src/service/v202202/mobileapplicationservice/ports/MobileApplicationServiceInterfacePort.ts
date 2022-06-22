import { CreateMobileApplications } from "../definitions/CreateMobileApplications";
import { CreateMobileApplicationsResponse } from "../definitions/CreateMobileApplicationsResponse";
import { GetMobileApplicationsByStatement } from "../definitions/GetMobileApplicationsByStatement";
import { GetMobileApplicationsByStatementResponse } from "../definitions/GetMobileApplicationsByStatementResponse";
import { PerformMobileApplicationAction } from "../definitions/PerformMobileApplicationAction";
import { PerformMobileApplicationActionResponse } from "../definitions/PerformMobileApplicationActionResponse";
import { UpdateMobileApplications } from "../definitions/UpdateMobileApplications";
import { UpdateMobileApplicationsResponse } from "../definitions/UpdateMobileApplicationsResponse";

export interface MobileApplicationServiceInterfacePort {
    createMobileApplications(createMobileApplications: CreateMobileApplications, callback: (err: any, result: CreateMobileApplicationsResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getMobileApplicationsByStatement(getMobileApplicationsByStatement: GetMobileApplicationsByStatement, callback: (err: any, result: GetMobileApplicationsByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    performMobileApplicationAction(performMobileApplicationAction: PerformMobileApplicationAction, callback: (err: any, result: PerformMobileApplicationActionResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    updateMobileApplications(updateMobileApplications: UpdateMobileApplications, callback: (err: any, result: UpdateMobileApplicationsResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
