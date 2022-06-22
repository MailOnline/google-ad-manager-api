import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { CreateCreativeWrappers } from "./definitions/CreateCreativeWrappers";
import { CreateCreativeWrappersResponse } from "./definitions/CreateCreativeWrappersResponse";
import { GetCreativeWrappersByStatement } from "./definitions/GetCreativeWrappersByStatement";
import { GetCreativeWrappersByStatementResponse } from "./definitions/GetCreativeWrappersByStatementResponse";
import { PerformCreativeWrapperAction } from "./definitions/PerformCreativeWrapperAction";
import { PerformCreativeWrapperActionResponse } from "./definitions/PerformCreativeWrapperActionResponse";
import { UpdateCreativeWrappers } from "./definitions/UpdateCreativeWrappers";
import { UpdateCreativeWrappersResponse } from "./definitions/UpdateCreativeWrappersResponse";
import { CreativeWrapperService } from "./services/CreativeWrapperService";

export interface CreativeWrapperServiceClient extends SoapClient {
    CreativeWrapperService: CreativeWrapperService;
    createCreativeWrappersAsync(createCreativeWrappers: CreateCreativeWrappers): Promise<[result: CreateCreativeWrappersResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getCreativeWrappersByStatementAsync(getCreativeWrappersByStatement: GetCreativeWrappersByStatement): Promise<[result: GetCreativeWrappersByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    performCreativeWrapperActionAsync(performCreativeWrapperAction: PerformCreativeWrapperAction): Promise<[result: PerformCreativeWrapperActionResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    updateCreativeWrappersAsync(updateCreativeWrappers: UpdateCreativeWrappers): Promise<[result: UpdateCreativeWrappersResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create CreativeWrapperServiceClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<CreativeWrapperServiceClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
