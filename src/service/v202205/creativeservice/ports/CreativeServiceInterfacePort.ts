import { CreateCreatives } from "../definitions/CreateCreatives";
import { CreateCreativesResponse } from "../definitions/CreateCreativesResponse";
import { GetCreativesByStatement } from "../definitions/GetCreativesByStatement";
import { GetCreativesByStatementResponse } from "../definitions/GetCreativesByStatementResponse";
import { PerformCreativeAction } from "../definitions/PerformCreativeAction";
import { PerformCreativeActionResponse } from "../definitions/PerformCreativeActionResponse";
import { UpdateCreatives } from "../definitions/UpdateCreatives";
import { UpdateCreativesResponse } from "../definitions/UpdateCreativesResponse";

export interface CreativeServiceInterfacePort {
    createCreatives(createCreatives: CreateCreatives, callback: (err: any, result: CreateCreativesResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getCreativesByStatement(getCreativesByStatement: GetCreativesByStatement, callback: (err: any, result: GetCreativesByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    performCreativeAction(performCreativeAction: PerformCreativeAction, callback: (err: any, result: PerformCreativeActionResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    updateCreatives(updateCreatives: UpdateCreatives, callback: (err: any, result: UpdateCreativesResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
