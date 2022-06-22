import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { CreateContacts } from "./definitions/CreateContacts";
import { CreateContactsResponse } from "./definitions/CreateContactsResponse";
import { GetContactsByStatement } from "./definitions/GetContactsByStatement";
import { GetContactsByStatementResponse } from "./definitions/GetContactsByStatementResponse";
import { UpdateContacts } from "./definitions/UpdateContacts";
import { UpdateContactsResponse } from "./definitions/UpdateContactsResponse";
import { ContactService } from "./services/ContactService";

export interface ContactServiceClient extends SoapClient {
    ContactService: ContactService;
    createContactsAsync(createContacts: CreateContacts): Promise<[result: CreateContactsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getContactsByStatementAsync(getContactsByStatement: GetContactsByStatement): Promise<[result: GetContactsByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    updateContactsAsync(updateContacts: UpdateContacts): Promise<[result: UpdateContactsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create ContactServiceClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<ContactServiceClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
