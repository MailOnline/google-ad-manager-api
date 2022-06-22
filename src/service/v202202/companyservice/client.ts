import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { CreateCompanies } from "./definitions/CreateCompanies";
import { CreateCompaniesResponse } from "./definitions/CreateCompaniesResponse";
import { GetCompaniesByStatement } from "./definitions/GetCompaniesByStatement";
import { GetCompaniesByStatementResponse } from "./definitions/GetCompaniesByStatementResponse";
import { PerformCompanyAction } from "./definitions/PerformCompanyAction";
import { PerformCompanyActionResponse } from "./definitions/PerformCompanyActionResponse";
import { UpdateCompanies } from "./definitions/UpdateCompanies";
import { UpdateCompaniesResponse } from "./definitions/UpdateCompaniesResponse";
import { CompanyService } from "./services/CompanyService";

export interface CompanyServiceClient extends SoapClient {
    CompanyService: CompanyService;
    createCompaniesAsync(createCompanies: CreateCompanies): Promise<[result: CreateCompaniesResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getCompaniesByStatementAsync(getCompaniesByStatement: GetCompaniesByStatement): Promise<[result: GetCompaniesByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    performCompanyActionAsync(performCompanyAction: PerformCompanyAction): Promise<[result: PerformCompanyActionResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    updateCompaniesAsync(updateCompanies: UpdateCompanies): Promise<[result: UpdateCompaniesResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create CompanyServiceClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<CompanyServiceClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
