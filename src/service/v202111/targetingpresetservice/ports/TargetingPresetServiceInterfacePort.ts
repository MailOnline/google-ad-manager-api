import { GetTargetingPresetsByStatement } from "../definitions/GetTargetingPresetsByStatement";
import { GetTargetingPresetsByStatementResponse } from "../definitions/GetTargetingPresetsByStatementResponse";

export interface TargetingPresetServiceInterfacePort {
    getTargetingPresetsByStatement(getTargetingPresetsByStatement: GetTargetingPresetsByStatement, callback: (err: any, result: GetTargetingPresetsByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
