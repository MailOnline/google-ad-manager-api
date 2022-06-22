import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { CreateDaiEncodingProfiles } from "./definitions/CreateDaiEncodingProfiles";
import { CreateDaiEncodingProfilesResponse } from "./definitions/CreateDaiEncodingProfilesResponse";
import { GetDaiEncodingProfilesByStatement } from "./definitions/GetDaiEncodingProfilesByStatement";
import { GetDaiEncodingProfilesByStatementResponse } from "./definitions/GetDaiEncodingProfilesByStatementResponse";
import { PerformDaiEncodingProfileAction } from "./definitions/PerformDaiEncodingProfileAction";
import { PerformDaiEncodingProfileActionResponse } from "./definitions/PerformDaiEncodingProfileActionResponse";
import { UpdateDaiEncodingProfiles } from "./definitions/UpdateDaiEncodingProfiles";
import { UpdateDaiEncodingProfilesResponse } from "./definitions/UpdateDaiEncodingProfilesResponse";
import { DaiEncodingProfileService } from "./services/DaiEncodingProfileService";

export interface DaiEncodingProfileServiceClient extends SoapClient {
    DaiEncodingProfileService: DaiEncodingProfileService;
    createDaiEncodingProfilesAsync(createDaiEncodingProfiles: CreateDaiEncodingProfiles): Promise<[result: CreateDaiEncodingProfilesResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getDaiEncodingProfilesByStatementAsync(getDaiEncodingProfilesByStatement: GetDaiEncodingProfilesByStatement): Promise<[result: GetDaiEncodingProfilesByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    performDaiEncodingProfileActionAsync(performDaiEncodingProfileAction: PerformDaiEncodingProfileAction): Promise<[result: PerformDaiEncodingProfileActionResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    updateDaiEncodingProfilesAsync(updateDaiEncodingProfiles: UpdateDaiEncodingProfiles): Promise<[result: UpdateDaiEncodingProfilesResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create DaiEncodingProfileServiceClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<DaiEncodingProfileServiceClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
