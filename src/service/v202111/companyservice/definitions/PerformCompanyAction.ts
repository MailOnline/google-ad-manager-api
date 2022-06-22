import { CompanyAction } from "./CompanyAction";
import { FilterStatement } from "./FilterStatement";

/** performCompanyAction */
export interface PerformCompanyAction {
    /** companyAction */
    companyAction?: CompanyAction;
    /** statement */
    statement?: FilterStatement;
}
