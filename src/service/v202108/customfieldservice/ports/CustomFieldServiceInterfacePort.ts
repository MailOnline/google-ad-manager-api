import { CreateCustomFieldOptions } from "../definitions/CreateCustomFieldOptions";
import { CreateCustomFieldOptionsResponse } from "../definitions/CreateCustomFieldOptionsResponse";
import { CreateCustomFields } from "../definitions/CreateCustomFields";
import { CreateCustomFieldsResponse } from "../definitions/CreateCustomFieldsResponse";
import { GetCustomFieldOption } from "../definitions/GetCustomFieldOption";
import { GetCustomFieldOptionResponse } from "../definitions/GetCustomFieldOptionResponse";
import { GetCustomFieldsByStatement } from "../definitions/GetCustomFieldsByStatement";
import { GetCustomFieldsByStatementResponse } from "../definitions/GetCustomFieldsByStatementResponse";
import { PerformCustomFieldAction } from "../definitions/PerformCustomFieldAction";
import { PerformCustomFieldActionResponse } from "../definitions/PerformCustomFieldActionResponse";
import { UpdateCustomFieldOptions } from "../definitions/UpdateCustomFieldOptions";
import { UpdateCustomFieldOptionsResponse } from "../definitions/UpdateCustomFieldOptionsResponse";
import { UpdateCustomFields } from "../definitions/UpdateCustomFields";
import { UpdateCustomFieldsResponse } from "../definitions/UpdateCustomFieldsResponse";

export interface CustomFieldServiceInterfacePort {
    createCustomFieldOptions(createCustomFieldOptions: CreateCustomFieldOptions, callback: (err: any, result: CreateCustomFieldOptionsResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    createCustomFields(createCustomFields: CreateCustomFields, callback: (err: any, result: CreateCustomFieldsResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getCustomFieldOption(getCustomFieldOption: GetCustomFieldOption, callback: (err: any, result: GetCustomFieldOptionResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getCustomFieldsByStatement(getCustomFieldsByStatement: GetCustomFieldsByStatement, callback: (err: any, result: GetCustomFieldsByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    performCustomFieldAction(performCustomFieldAction: PerformCustomFieldAction, callback: (err: any, result: PerformCustomFieldActionResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    updateCustomFieldOptions(updateCustomFieldOptions: UpdateCustomFieldOptions, callback: (err: any, result: UpdateCustomFieldOptionsResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    updateCustomFields(updateCustomFields: UpdateCustomFields, callback: (err: any, result: UpdateCustomFieldsResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
