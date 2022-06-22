import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { CreateCustomFieldOptions } from "./definitions/CreateCustomFieldOptions";
import { CreateCustomFieldOptionsResponse } from "./definitions/CreateCustomFieldOptionsResponse";
import { CreateCustomFields } from "./definitions/CreateCustomFields";
import { CreateCustomFieldsResponse } from "./definitions/CreateCustomFieldsResponse";
import { GetCustomFieldOption } from "./definitions/GetCustomFieldOption";
import { GetCustomFieldOptionResponse } from "./definitions/GetCustomFieldOptionResponse";
import { GetCustomFieldsByStatement } from "./definitions/GetCustomFieldsByStatement";
import { GetCustomFieldsByStatementResponse } from "./definitions/GetCustomFieldsByStatementResponse";
import { PerformCustomFieldAction } from "./definitions/PerformCustomFieldAction";
import { PerformCustomFieldActionResponse } from "./definitions/PerformCustomFieldActionResponse";
import { UpdateCustomFieldOptions } from "./definitions/UpdateCustomFieldOptions";
import { UpdateCustomFieldOptionsResponse } from "./definitions/UpdateCustomFieldOptionsResponse";
import { UpdateCustomFields } from "./definitions/UpdateCustomFields";
import { UpdateCustomFieldsResponse } from "./definitions/UpdateCustomFieldsResponse";
import { CustomFieldService } from "./services/CustomFieldService";

export interface CustomFieldServiceClient extends SoapClient {
    CustomFieldService: CustomFieldService;
    createCustomFieldOptionsAsync(createCustomFieldOptions: CreateCustomFieldOptions): Promise<[result: CreateCustomFieldOptionsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    createCustomFieldsAsync(createCustomFields: CreateCustomFields): Promise<[result: CreateCustomFieldsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getCustomFieldOptionAsync(getCustomFieldOption: GetCustomFieldOption): Promise<[result: GetCustomFieldOptionResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getCustomFieldsByStatementAsync(getCustomFieldsByStatement: GetCustomFieldsByStatement): Promise<[result: GetCustomFieldsByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    performCustomFieldActionAsync(performCustomFieldAction: PerformCustomFieldAction): Promise<[result: PerformCustomFieldActionResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    updateCustomFieldOptionsAsync(updateCustomFieldOptions: UpdateCustomFieldOptions): Promise<[result: UpdateCustomFieldOptionsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    updateCustomFieldsAsync(updateCustomFields: UpdateCustomFields): Promise<[result: UpdateCustomFieldsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create CustomFieldServiceClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<CustomFieldServiceClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
