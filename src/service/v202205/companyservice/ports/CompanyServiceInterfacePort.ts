import { CreateCompanies } from "../definitions/CreateCompanies";
import { CreateCompaniesResponse } from "../definitions/CreateCompaniesResponse";
import { GetCompaniesByStatement } from "../definitions/GetCompaniesByStatement";
import { GetCompaniesByStatementResponse } from "../definitions/GetCompaniesByStatementResponse";
import { PerformCompanyAction } from "../definitions/PerformCompanyAction";
import { PerformCompanyActionResponse } from "../definitions/PerformCompanyActionResponse";
import { UpdateCompanies } from "../definitions/UpdateCompanies";
import { UpdateCompaniesResponse } from "../definitions/UpdateCompaniesResponse";

export interface CompanyServiceInterfacePort {
    createCompanies(createCompanies: CreateCompanies, callback: (err: any, result: CreateCompaniesResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getCompaniesByStatement(getCompaniesByStatement: GetCompaniesByStatement, callback: (err: any, result: GetCompaniesByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    performCompanyAction(performCompanyAction: PerformCompanyAction, callback: (err: any, result: PerformCompanyActionResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    updateCompanies(updateCompanies: UpdateCompanies, callback: (err: any, result: UpdateCompaniesResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
