import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { CreateMobileApplications } from "./definitions/CreateMobileApplications";
import { CreateMobileApplicationsResponse } from "./definitions/CreateMobileApplicationsResponse";
import { GetMobileApplicationsByStatement } from "./definitions/GetMobileApplicationsByStatement";
import { GetMobileApplicationsByStatementResponse } from "./definitions/GetMobileApplicationsByStatementResponse";
import { PerformMobileApplicationAction } from "./definitions/PerformMobileApplicationAction";
import { PerformMobileApplicationActionResponse } from "./definitions/PerformMobileApplicationActionResponse";
import { UpdateMobileApplications } from "./definitions/UpdateMobileApplications";
import { UpdateMobileApplicationsResponse } from "./definitions/UpdateMobileApplicationsResponse";
import { MobileApplicationService } from "./services/MobileApplicationService";

export interface MobileApplicationServiceClient extends SoapClient {
    MobileApplicationService: MobileApplicationService;
    createMobileApplicationsAsync(createMobileApplications: CreateMobileApplications): Promise<[result: CreateMobileApplicationsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getMobileApplicationsByStatementAsync(getMobileApplicationsByStatement: GetMobileApplicationsByStatement): Promise<[result: GetMobileApplicationsByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    performMobileApplicationActionAsync(performMobileApplicationAction: PerformMobileApplicationAction): Promise<[result: PerformMobileApplicationActionResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    updateMobileApplicationsAsync(updateMobileApplications: UpdateMobileApplications): Promise<[result: UpdateMobileApplicationsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create MobileApplicationServiceClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<MobileApplicationServiceClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
