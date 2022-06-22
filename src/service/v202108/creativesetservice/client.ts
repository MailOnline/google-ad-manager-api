import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { CreateCreativeSet } from "./definitions/CreateCreativeSet";
import { CreateCreativeSetResponse } from "./definitions/CreateCreativeSetResponse";
import { GetCreativeSetsByStatement } from "./definitions/GetCreativeSetsByStatement";
import { GetCreativeSetsByStatementResponse } from "./definitions/GetCreativeSetsByStatementResponse";
import { UpdateCreativeSet } from "./definitions/UpdateCreativeSet";
import { UpdateCreativeSetResponse } from "./definitions/UpdateCreativeSetResponse";
import { CreativeSetService } from "./services/CreativeSetService";

export interface CreativeSetServiceClient extends SoapClient {
    CreativeSetService: CreativeSetService;
    createCreativeSetAsync(createCreativeSet: CreateCreativeSet): Promise<[result: CreateCreativeSetResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getCreativeSetsByStatementAsync(getCreativeSetsByStatement: GetCreativeSetsByStatement): Promise<[result: GetCreativeSetsByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    updateCreativeSetAsync(updateCreativeSet: UpdateCreativeSet): Promise<[result: UpdateCreativeSetResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create CreativeSetServiceClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<CreativeSetServiceClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
