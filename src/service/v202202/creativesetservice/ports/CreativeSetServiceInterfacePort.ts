import { CreateCreativeSet } from "../definitions/CreateCreativeSet";
import { CreateCreativeSetResponse } from "../definitions/CreateCreativeSetResponse";
import { GetCreativeSetsByStatement } from "../definitions/GetCreativeSetsByStatement";
import { GetCreativeSetsByStatementResponse } from "../definitions/GetCreativeSetsByStatementResponse";
import { UpdateCreativeSet } from "../definitions/UpdateCreativeSet";
import { UpdateCreativeSetResponse } from "../definitions/UpdateCreativeSetResponse";

export interface CreativeSetServiceInterfacePort {
    createCreativeSet(createCreativeSet: CreateCreativeSet, callback: (err: any, result: CreateCreativeSetResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getCreativeSetsByStatement(getCreativeSetsByStatement: GetCreativeSetsByStatement, callback: (err: any, result: GetCreativeSetsByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    updateCreativeSet(updateCreativeSet: UpdateCreativeSet, callback: (err: any, result: UpdateCreativeSetResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
