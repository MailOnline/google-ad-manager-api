import { CreateContacts } from "../definitions/CreateContacts";
import { CreateContactsResponse } from "../definitions/CreateContactsResponse";
import { GetContactsByStatement } from "../definitions/GetContactsByStatement";
import { GetContactsByStatementResponse } from "../definitions/GetContactsByStatementResponse";
import { UpdateContacts } from "../definitions/UpdateContacts";
import { UpdateContactsResponse } from "../definitions/UpdateContactsResponse";

export interface ContactServiceInterfacePort {
    createContacts(createContacts: CreateContacts, callback: (err: any, result: CreateContactsResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getContactsByStatement(getContactsByStatement: GetContactsByStatement, callback: (err: any, result: GetContactsByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    updateContacts(updateContacts: UpdateContacts, callback: (err: any, result: UpdateContactsResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
