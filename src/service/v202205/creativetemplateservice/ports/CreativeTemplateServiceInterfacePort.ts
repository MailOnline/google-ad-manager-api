import { GetCreativeTemplatesByStatement } from "../definitions/GetCreativeTemplatesByStatement";
import { GetCreativeTemplatesByStatementResponse } from "../definitions/GetCreativeTemplatesByStatementResponse";

export interface CreativeTemplateServiceInterfacePort {
    getCreativeTemplatesByStatement(getCreativeTemplatesByStatement: GetCreativeTemplatesByStatement, callback: (err: any, result: GetCreativeTemplatesByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
