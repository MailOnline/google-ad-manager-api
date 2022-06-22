import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { CreateSites } from "./definitions/CreateSites";
import { CreateSitesResponse } from "./definitions/CreateSitesResponse";
import { GetSitesByStatement } from "./definitions/GetSitesByStatement";
import { GetSitesByStatementResponse } from "./definitions/GetSitesByStatementResponse";
import { PerformSiteAction } from "./definitions/PerformSiteAction";
import { PerformSiteActionResponse } from "./definitions/PerformSiteActionResponse";
import { UpdateSites } from "./definitions/UpdateSites";
import { UpdateSitesResponse } from "./definitions/UpdateSitesResponse";
import { SiteService } from "./services/SiteService";

export interface SiteServiceClient extends SoapClient {
    SiteService: SiteService;
    createSitesAsync(createSites: CreateSites): Promise<[result: CreateSitesResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getSitesByStatementAsync(getSitesByStatement: GetSitesByStatement): Promise<[result: GetSitesByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    performSiteActionAsync(performSiteAction: PerformSiteAction): Promise<[result: PerformSiteActionResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    updateSitesAsync(updateSites: UpdateSites): Promise<[result: UpdateSitesResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create SiteServiceClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<SiteServiceClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
