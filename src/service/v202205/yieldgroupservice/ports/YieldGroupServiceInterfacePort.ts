import { CreateYieldGroups } from "../definitions/CreateYieldGroups";
import { CreateYieldGroupsResponse } from "../definitions/CreateYieldGroupsResponse";
import { GetYieldGroupsByStatement } from "../definitions/GetYieldGroupsByStatement";
import { GetYieldGroupsByStatementResponse } from "../definitions/GetYieldGroupsByStatementResponse";
import { GetYieldPartners } from "../definitions/GetYieldPartners";
import { GetYieldPartnersResponse } from "../definitions/GetYieldPartnersResponse";
import { UpdateYieldGroups } from "../definitions/UpdateYieldGroups";
import { UpdateYieldGroupsResponse } from "../definitions/UpdateYieldGroupsResponse";

export interface YieldGroupServiceInterfacePort {
    createYieldGroups(createYieldGroups: CreateYieldGroups, callback: (err: any, result: CreateYieldGroupsResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getYieldGroupsByStatement(getYieldGroupsByStatement: GetYieldGroupsByStatement, callback: (err: any, result: GetYieldGroupsByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getYieldPartners(getYieldPartners: GetYieldPartners, callback: (err: any, result: GetYieldPartnersResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    updateYieldGroups(updateYieldGroups: UpdateYieldGroups, callback: (err: any, result: UpdateYieldGroupsResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
