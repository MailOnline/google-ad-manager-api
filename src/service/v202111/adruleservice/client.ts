import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { CreateAdRules } from "./definitions/CreateAdRules";
import { CreateAdRulesResponse } from "./definitions/CreateAdRulesResponse";
import { CreateAdSpots } from "./definitions/CreateAdSpots";
import { CreateAdSpotsResponse } from "./definitions/CreateAdSpotsResponse";
import { CreateBreakTemplates } from "./definitions/CreateBreakTemplates";
import { CreateBreakTemplatesResponse } from "./definitions/CreateBreakTemplatesResponse";
import { GetAdRulesByStatement } from "./definitions/GetAdRulesByStatement";
import { GetAdRulesByStatementResponse } from "./definitions/GetAdRulesByStatementResponse";
import { GetAdSpotsByStatement } from "./definitions/GetAdSpotsByStatement";
import { GetAdSpotsByStatementResponse } from "./definitions/GetAdSpotsByStatementResponse";
import { GetBreakTemplatesByStatement } from "./definitions/GetBreakTemplatesByStatement";
import { GetBreakTemplatesByStatementResponse } from "./definitions/GetBreakTemplatesByStatementResponse";
import { PerformAdRuleAction } from "./definitions/PerformAdRuleAction";
import { PerformAdRuleActionResponse } from "./definitions/PerformAdRuleActionResponse";
import { UpdateAdRules } from "./definitions/UpdateAdRules";
import { UpdateAdRulesResponse } from "./definitions/UpdateAdRulesResponse";
import { UpdateAdSpots } from "./definitions/UpdateAdSpots";
import { UpdateAdSpotsResponse } from "./definitions/UpdateAdSpotsResponse";
import { UpdateBreakTemplates } from "./definitions/UpdateBreakTemplates";
import { UpdateBreakTemplatesResponse } from "./definitions/UpdateBreakTemplatesResponse";
import { AdRuleService } from "./services/AdRuleService";

export interface AdRuleServiceClient extends SoapClient {
    AdRuleService: AdRuleService;
    createAdRulesAsync(createAdRules: CreateAdRules): Promise<[result: CreateAdRulesResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    createAdSpotsAsync(createAdSpots: CreateAdSpots): Promise<[result: CreateAdSpotsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    createBreakTemplatesAsync(createBreakTemplates: CreateBreakTemplates): Promise<[result: CreateBreakTemplatesResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getAdRulesByStatementAsync(getAdRulesByStatement: GetAdRulesByStatement): Promise<[result: GetAdRulesByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getAdSpotsByStatementAsync(getAdSpotsByStatement: GetAdSpotsByStatement): Promise<[result: GetAdSpotsByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getBreakTemplatesByStatementAsync(getBreakTemplatesByStatement: GetBreakTemplatesByStatement): Promise<[result: GetBreakTemplatesByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    performAdRuleActionAsync(performAdRuleAction: PerformAdRuleAction): Promise<[result: PerformAdRuleActionResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    updateAdRulesAsync(updateAdRules: UpdateAdRules): Promise<[result: UpdateAdRulesResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    updateAdSpotsAsync(updateAdSpots: UpdateAdSpots): Promise<[result: UpdateAdSpotsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    updateBreakTemplatesAsync(updateBreakTemplates: UpdateBreakTemplates): Promise<[result: UpdateBreakTemplatesResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create AdRuleServiceClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<AdRuleServiceClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
