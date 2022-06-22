import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { CreateAdExclusionRules } from "./definitions/CreateAdExclusionRules";
import { CreateAdExclusionRulesResponse } from "./definitions/CreateAdExclusionRulesResponse";
import { GetAdExclusionRulesByStatement } from "./definitions/GetAdExclusionRulesByStatement";
import { GetAdExclusionRulesByStatementResponse } from "./definitions/GetAdExclusionRulesByStatementResponse";
import { PerformAdExclusionRuleAction } from "./definitions/PerformAdExclusionRuleAction";
import { PerformAdExclusionRuleActionResponse } from "./definitions/PerformAdExclusionRuleActionResponse";
import { UpdateAdExclusionRules } from "./definitions/UpdateAdExclusionRules";
import { UpdateAdExclusionRulesResponse } from "./definitions/UpdateAdExclusionRulesResponse";
import { AdExclusionRuleService } from "./services/AdExclusionRuleService";

export interface AdExclusionRuleServiceClient extends SoapClient {
    AdExclusionRuleService: AdExclusionRuleService;
    createAdExclusionRulesAsync(createAdExclusionRules: CreateAdExclusionRules): Promise<[result: CreateAdExclusionRulesResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getAdExclusionRulesByStatementAsync(getAdExclusionRulesByStatement: GetAdExclusionRulesByStatement): Promise<[result: GetAdExclusionRulesByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    performAdExclusionRuleActionAsync(performAdExclusionRuleAction: PerformAdExclusionRuleAction): Promise<[result: PerformAdExclusionRuleActionResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    updateAdExclusionRulesAsync(updateAdExclusionRules: UpdateAdExclusionRules): Promise<[result: UpdateAdExclusionRulesResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create AdExclusionRuleServiceClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<AdExclusionRuleServiceClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
