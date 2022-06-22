import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { CreateCustomTargetingKeys } from "./definitions/CreateCustomTargetingKeys";
import { CreateCustomTargetingKeysResponse } from "./definitions/CreateCustomTargetingKeysResponse";
import { CreateCustomTargetingValues } from "./definitions/CreateCustomTargetingValues";
import { CreateCustomTargetingValuesResponse } from "./definitions/CreateCustomTargetingValuesResponse";
import { GetCustomTargetingKeysByStatement } from "./definitions/GetCustomTargetingKeysByStatement";
import { GetCustomTargetingKeysByStatementResponse } from "./definitions/GetCustomTargetingKeysByStatementResponse";
import { GetCustomTargetingValuesByStatement } from "./definitions/GetCustomTargetingValuesByStatement";
import { GetCustomTargetingValuesByStatementResponse } from "./definitions/GetCustomTargetingValuesByStatementResponse";
import { PerformCustomTargetingKeyAction } from "./definitions/PerformCustomTargetingKeyAction";
import { PerformCustomTargetingKeyActionResponse } from "./definitions/PerformCustomTargetingKeyActionResponse";
import { PerformCustomTargetingValueAction } from "./definitions/PerformCustomTargetingValueAction";
import { PerformCustomTargetingValueActionResponse } from "./definitions/PerformCustomTargetingValueActionResponse";
import { UpdateCustomTargetingKeys } from "./definitions/UpdateCustomTargetingKeys";
import { UpdateCustomTargetingKeysResponse } from "./definitions/UpdateCustomTargetingKeysResponse";
import { UpdateCustomTargetingValues } from "./definitions/UpdateCustomTargetingValues";
import { UpdateCustomTargetingValuesResponse } from "./definitions/UpdateCustomTargetingValuesResponse";
import { CustomTargetingService } from "./services/CustomTargetingService";

export interface CustomTargetingServiceClient extends SoapClient {
    CustomTargetingService: CustomTargetingService;
    createCustomTargetingKeysAsync(createCustomTargetingKeys: CreateCustomTargetingKeys): Promise<[result: CreateCustomTargetingKeysResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    createCustomTargetingValuesAsync(createCustomTargetingValues: CreateCustomTargetingValues): Promise<[result: CreateCustomTargetingValuesResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getCustomTargetingKeysByStatementAsync(getCustomTargetingKeysByStatement: GetCustomTargetingKeysByStatement): Promise<[result: GetCustomTargetingKeysByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getCustomTargetingValuesByStatementAsync(getCustomTargetingValuesByStatement: GetCustomTargetingValuesByStatement): Promise<[result: GetCustomTargetingValuesByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    performCustomTargetingKeyActionAsync(performCustomTargetingKeyAction: PerformCustomTargetingKeyAction): Promise<[result: PerformCustomTargetingKeyActionResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    performCustomTargetingValueActionAsync(performCustomTargetingValueAction: PerformCustomTargetingValueAction): Promise<[result: PerformCustomTargetingValueActionResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    updateCustomTargetingKeysAsync(updateCustomTargetingKeys: UpdateCustomTargetingKeys): Promise<[result: UpdateCustomTargetingKeysResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    updateCustomTargetingValuesAsync(updateCustomTargetingValues: UpdateCustomTargetingValues): Promise<[result: UpdateCustomTargetingValuesResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create CustomTargetingServiceClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<CustomTargetingServiceClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
