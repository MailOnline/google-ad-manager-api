import { CreateSites } from "../definitions/CreateSites";
import { CreateSitesResponse } from "../definitions/CreateSitesResponse";
import { GetSitesByStatement } from "../definitions/GetSitesByStatement";
import { GetSitesByStatementResponse } from "../definitions/GetSitesByStatementResponse";
import { PerformSiteAction } from "../definitions/PerformSiteAction";
import { PerformSiteActionResponse } from "../definitions/PerformSiteActionResponse";
import { UpdateSites } from "../definitions/UpdateSites";
import { UpdateSitesResponse } from "../definitions/UpdateSitesResponse";

export interface SiteServiceInterfacePort {
    createSites(createSites: CreateSites, callback: (err: any, result: CreateSitesResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getSitesByStatement(getSitesByStatement: GetSitesByStatement, callback: (err: any, result: GetSitesByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    performSiteAction(performSiteAction: PerformSiteAction, callback: (err: any, result: PerformSiteActionResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    updateSites(updateSites: UpdateSites, callback: (err: any, result: UpdateSitesResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
