import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { Select } from "./definitions/Select";
import { SelectResponse } from "./definitions/SelectResponse";
import { PublisherQueryLanguageService } from "./services/PublisherQueryLanguageService";

export interface PublisherQueryLanguageServiceClient extends SoapClient {
    PublisherQueryLanguageService: PublisherQueryLanguageService;
    selectAsync(select: Select): Promise<[result: SelectResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create PublisherQueryLanguageServiceClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<PublisherQueryLanguageServiceClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
