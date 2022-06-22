import { GetContentByStatement } from "../definitions/GetContentByStatement";
import { GetContentByStatementResponse } from "../definitions/GetContentByStatementResponse";

export interface ContentServiceInterfacePort {
    getContentByStatement(getContentByStatement: GetContentByStatement, callback: (err: any, result: GetContentByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
