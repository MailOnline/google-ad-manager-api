import { GetLineItemTemplatesByStatement } from "../definitions/GetLineItemTemplatesByStatement";
import { GetLineItemTemplatesByStatementResponse } from "../definitions/GetLineItemTemplatesByStatementResponse";

export interface LineItemTemplateServiceInterfacePort {
    getLineItemTemplatesByStatement(getLineItemTemplatesByStatement: GetLineItemTemplatesByStatement, callback: (err: any, result: GetLineItemTemplatesByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
