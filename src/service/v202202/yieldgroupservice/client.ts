import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { CreateYieldGroups } from "./definitions/CreateYieldGroups";
import { CreateYieldGroupsResponse } from "./definitions/CreateYieldGroupsResponse";
import { GetYieldGroupsByStatement } from "./definitions/GetYieldGroupsByStatement";
import { GetYieldGroupsByStatementResponse } from "./definitions/GetYieldGroupsByStatementResponse";
import { GetYieldPartners } from "./definitions/GetYieldPartners";
import { GetYieldPartnersResponse } from "./definitions/GetYieldPartnersResponse";
import { UpdateYieldGroups } from "./definitions/UpdateYieldGroups";
import { UpdateYieldGroupsResponse } from "./definitions/UpdateYieldGroupsResponse";
import { YieldGroupService } from "./services/YieldGroupService";

export interface YieldGroupServiceClient extends SoapClient {
    YieldGroupService: YieldGroupService;
    createYieldGroupsAsync(createYieldGroups: CreateYieldGroups): Promise<[result: CreateYieldGroupsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getYieldGroupsByStatementAsync(getYieldGroupsByStatement: GetYieldGroupsByStatement): Promise<[result: GetYieldGroupsByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getYieldPartnersAsync(getYieldPartners: GetYieldPartners): Promise<[result: GetYieldPartnersResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    updateYieldGroupsAsync(updateYieldGroups: UpdateYieldGroups): Promise<[result: UpdateYieldGroupsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create YieldGroupServiceClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<YieldGroupServiceClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
