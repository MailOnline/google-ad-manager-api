import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { CreateDaiAuthenticationKeys } from "./definitions/CreateDaiAuthenticationKeys";
import { CreateDaiAuthenticationKeysResponse } from "./definitions/CreateDaiAuthenticationKeysResponse";
import { GetDaiAuthenticationKeysByStatement } from "./definitions/GetDaiAuthenticationKeysByStatement";
import { GetDaiAuthenticationKeysByStatementResponse } from "./definitions/GetDaiAuthenticationKeysByStatementResponse";
import { PerformDaiAuthenticationKeyAction } from "./definitions/PerformDaiAuthenticationKeyAction";
import { PerformDaiAuthenticationKeyActionResponse } from "./definitions/PerformDaiAuthenticationKeyActionResponse";
import { UpdateDaiAuthenticationKeys } from "./definitions/UpdateDaiAuthenticationKeys";
import { UpdateDaiAuthenticationKeysResponse } from "./definitions/UpdateDaiAuthenticationKeysResponse";
import { DaiAuthenticationKeyService } from "./services/DaiAuthenticationKeyService";

export interface DaiAuthenticationKeyServiceClient extends SoapClient {
    DaiAuthenticationKeyService: DaiAuthenticationKeyService;
    createDaiAuthenticationKeysAsync(createDaiAuthenticationKeys: CreateDaiAuthenticationKeys): Promise<[result: CreateDaiAuthenticationKeysResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getDaiAuthenticationKeysByStatementAsync(getDaiAuthenticationKeysByStatement: GetDaiAuthenticationKeysByStatement): Promise<[result: GetDaiAuthenticationKeysByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    performDaiAuthenticationKeyActionAsync(performDaiAuthenticationKeyAction: PerformDaiAuthenticationKeyAction): Promise<[result: PerformDaiAuthenticationKeyActionResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    updateDaiAuthenticationKeysAsync(updateDaiAuthenticationKeys: UpdateDaiAuthenticationKeys): Promise<[result: UpdateDaiAuthenticationKeysResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create DaiAuthenticationKeyServiceClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<DaiAuthenticationKeyServiceClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
