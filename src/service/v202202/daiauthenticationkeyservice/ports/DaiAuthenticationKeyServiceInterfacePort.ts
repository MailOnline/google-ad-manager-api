import { CreateDaiAuthenticationKeys } from "../definitions/CreateDaiAuthenticationKeys";
import { CreateDaiAuthenticationKeysResponse } from "../definitions/CreateDaiAuthenticationKeysResponse";
import { GetDaiAuthenticationKeysByStatement } from "../definitions/GetDaiAuthenticationKeysByStatement";
import { GetDaiAuthenticationKeysByStatementResponse } from "../definitions/GetDaiAuthenticationKeysByStatementResponse";
import { PerformDaiAuthenticationKeyAction } from "../definitions/PerformDaiAuthenticationKeyAction";
import { PerformDaiAuthenticationKeyActionResponse } from "../definitions/PerformDaiAuthenticationKeyActionResponse";
import { UpdateDaiAuthenticationKeys } from "../definitions/UpdateDaiAuthenticationKeys";
import { UpdateDaiAuthenticationKeysResponse } from "../definitions/UpdateDaiAuthenticationKeysResponse";

export interface DaiAuthenticationKeyServiceInterfacePort {
    createDaiAuthenticationKeys(createDaiAuthenticationKeys: CreateDaiAuthenticationKeys, callback: (err: any, result: CreateDaiAuthenticationKeysResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getDaiAuthenticationKeysByStatement(getDaiAuthenticationKeysByStatement: GetDaiAuthenticationKeysByStatement, callback: (err: any, result: GetDaiAuthenticationKeysByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    performDaiAuthenticationKeyAction(performDaiAuthenticationKeyAction: PerformDaiAuthenticationKeyAction, callback: (err: any, result: PerformDaiAuthenticationKeyActionResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    updateDaiAuthenticationKeys(updateDaiAuthenticationKeys: UpdateDaiAuthenticationKeys, callback: (err: any, result: UpdateDaiAuthenticationKeysResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
