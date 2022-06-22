import { CreateDaiEncodingProfiles } from "../definitions/CreateDaiEncodingProfiles";
import { CreateDaiEncodingProfilesResponse } from "../definitions/CreateDaiEncodingProfilesResponse";
import { GetDaiEncodingProfilesByStatement } from "../definitions/GetDaiEncodingProfilesByStatement";
import { GetDaiEncodingProfilesByStatementResponse } from "../definitions/GetDaiEncodingProfilesByStatementResponse";
import { PerformDaiEncodingProfileAction } from "../definitions/PerformDaiEncodingProfileAction";
import { PerformDaiEncodingProfileActionResponse } from "../definitions/PerformDaiEncodingProfileActionResponse";
import { UpdateDaiEncodingProfiles } from "../definitions/UpdateDaiEncodingProfiles";
import { UpdateDaiEncodingProfilesResponse } from "../definitions/UpdateDaiEncodingProfilesResponse";

export interface DaiEncodingProfileServiceInterfacePort {
    createDaiEncodingProfiles(createDaiEncodingProfiles: CreateDaiEncodingProfiles, callback: (err: any, result: CreateDaiEncodingProfilesResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getDaiEncodingProfilesByStatement(getDaiEncodingProfilesByStatement: GetDaiEncodingProfilesByStatement, callback: (err: any, result: GetDaiEncodingProfilesByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    performDaiEncodingProfileAction(performDaiEncodingProfileAction: PerformDaiEncodingProfileAction, callback: (err: any, result: PerformDaiEncodingProfileActionResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    updateDaiEncodingProfiles(updateDaiEncodingProfiles: UpdateDaiEncodingProfiles, callback: (err: any, result: UpdateDaiEncodingProfilesResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
