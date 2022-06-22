import { CreateCustomTargetingKeys } from "../definitions/CreateCustomTargetingKeys";
import { CreateCustomTargetingKeysResponse } from "../definitions/CreateCustomTargetingKeysResponse";
import { CreateCustomTargetingValues } from "../definitions/CreateCustomTargetingValues";
import { CreateCustomTargetingValuesResponse } from "../definitions/CreateCustomTargetingValuesResponse";
import { GetCustomTargetingKeysByStatement } from "../definitions/GetCustomTargetingKeysByStatement";
import { GetCustomTargetingKeysByStatementResponse } from "../definitions/GetCustomTargetingKeysByStatementResponse";
import { GetCustomTargetingValuesByStatement } from "../definitions/GetCustomTargetingValuesByStatement";
import { GetCustomTargetingValuesByStatementResponse } from "../definitions/GetCustomTargetingValuesByStatementResponse";
import { PerformCustomTargetingKeyAction } from "../definitions/PerformCustomTargetingKeyAction";
import { PerformCustomTargetingKeyActionResponse } from "../definitions/PerformCustomTargetingKeyActionResponse";
import { PerformCustomTargetingValueAction } from "../definitions/PerformCustomTargetingValueAction";
import { PerformCustomTargetingValueActionResponse } from "../definitions/PerformCustomTargetingValueActionResponse";
import { UpdateCustomTargetingKeys } from "../definitions/UpdateCustomTargetingKeys";
import { UpdateCustomTargetingKeysResponse } from "../definitions/UpdateCustomTargetingKeysResponse";
import { UpdateCustomTargetingValues } from "../definitions/UpdateCustomTargetingValues";
import { UpdateCustomTargetingValuesResponse } from "../definitions/UpdateCustomTargetingValuesResponse";

export interface CustomTargetingServiceInterfacePort {
    createCustomTargetingKeys(createCustomTargetingKeys: CreateCustomTargetingKeys, callback: (err: any, result: CreateCustomTargetingKeysResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    createCustomTargetingValues(createCustomTargetingValues: CreateCustomTargetingValues, callback: (err: any, result: CreateCustomTargetingValuesResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getCustomTargetingKeysByStatement(getCustomTargetingKeysByStatement: GetCustomTargetingKeysByStatement, callback: (err: any, result: GetCustomTargetingKeysByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getCustomTargetingValuesByStatement(getCustomTargetingValuesByStatement: GetCustomTargetingValuesByStatement, callback: (err: any, result: GetCustomTargetingValuesByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    performCustomTargetingKeyAction(performCustomTargetingKeyAction: PerformCustomTargetingKeyAction, callback: (err: any, result: PerformCustomTargetingKeyActionResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    performCustomTargetingValueAction(performCustomTargetingValueAction: PerformCustomTargetingValueAction, callback: (err: any, result: PerformCustomTargetingValueActionResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    updateCustomTargetingKeys(updateCustomTargetingKeys: UpdateCustomTargetingKeys, callback: (err: any, result: UpdateCustomTargetingKeysResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    updateCustomTargetingValues(updateCustomTargetingValues: UpdateCustomTargetingValues, callback: (err: any, result: UpdateCustomTargetingValuesResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
