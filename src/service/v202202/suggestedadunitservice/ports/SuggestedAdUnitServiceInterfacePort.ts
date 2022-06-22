import { GetSuggestedAdUnitsByStatement } from "../definitions/GetSuggestedAdUnitsByStatement";
import { GetSuggestedAdUnitsByStatementResponse } from "../definitions/GetSuggestedAdUnitsByStatementResponse";
import { PerformSuggestedAdUnitAction } from "../definitions/PerformSuggestedAdUnitAction";
import { PerformSuggestedAdUnitActionResponse } from "../definitions/PerformSuggestedAdUnitActionResponse";

export interface SuggestedAdUnitServiceInterfacePort {
    getSuggestedAdUnitsByStatement(getSuggestedAdUnitsByStatement: GetSuggestedAdUnitsByStatement, callback: (err: any, result: GetSuggestedAdUnitsByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    performSuggestedAdUnitAction(performSuggestedAdUnitAction: PerformSuggestedAdUnitAction, callback: (err: any, result: PerformSuggestedAdUnitActionResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
