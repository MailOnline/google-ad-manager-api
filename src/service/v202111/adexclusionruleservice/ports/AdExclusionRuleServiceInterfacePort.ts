import { CreateAdExclusionRules } from "../definitions/CreateAdExclusionRules";
import { CreateAdExclusionRulesResponse } from "../definitions/CreateAdExclusionRulesResponse";
import { GetAdExclusionRulesByStatement } from "../definitions/GetAdExclusionRulesByStatement";
import { GetAdExclusionRulesByStatementResponse } from "../definitions/GetAdExclusionRulesByStatementResponse";
import { PerformAdExclusionRuleAction } from "../definitions/PerformAdExclusionRuleAction";
import { PerformAdExclusionRuleActionResponse } from "../definitions/PerformAdExclusionRuleActionResponse";
import { UpdateAdExclusionRules } from "../definitions/UpdateAdExclusionRules";
import { UpdateAdExclusionRulesResponse } from "../definitions/UpdateAdExclusionRulesResponse";

export interface AdExclusionRuleServiceInterfacePort {
    createAdExclusionRules(createAdExclusionRules: CreateAdExclusionRules, callback: (err: any, result: CreateAdExclusionRulesResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getAdExclusionRulesByStatement(getAdExclusionRulesByStatement: GetAdExclusionRulesByStatement, callback: (err: any, result: GetAdExclusionRulesByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    performAdExclusionRuleAction(performAdExclusionRuleAction: PerformAdExclusionRuleAction, callback: (err: any, result: PerformAdExclusionRuleActionResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    updateAdExclusionRules(updateAdExclusionRules: UpdateAdExclusionRules, callback: (err: any, result: UpdateAdExclusionRulesResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
