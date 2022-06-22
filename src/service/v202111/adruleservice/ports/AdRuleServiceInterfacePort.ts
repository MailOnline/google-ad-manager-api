import { CreateAdRules } from "../definitions/CreateAdRules";
import { CreateAdRulesResponse } from "../definitions/CreateAdRulesResponse";
import { CreateAdSpots } from "../definitions/CreateAdSpots";
import { CreateAdSpotsResponse } from "../definitions/CreateAdSpotsResponse";
import { CreateBreakTemplates } from "../definitions/CreateBreakTemplates";
import { CreateBreakTemplatesResponse } from "../definitions/CreateBreakTemplatesResponse";
import { GetAdRulesByStatement } from "../definitions/GetAdRulesByStatement";
import { GetAdRulesByStatementResponse } from "../definitions/GetAdRulesByStatementResponse";
import { GetAdSpotsByStatement } from "../definitions/GetAdSpotsByStatement";
import { GetAdSpotsByStatementResponse } from "../definitions/GetAdSpotsByStatementResponse";
import { GetBreakTemplatesByStatement } from "../definitions/GetBreakTemplatesByStatement";
import { GetBreakTemplatesByStatementResponse } from "../definitions/GetBreakTemplatesByStatementResponse";
import { PerformAdRuleAction } from "../definitions/PerformAdRuleAction";
import { PerformAdRuleActionResponse } from "../definitions/PerformAdRuleActionResponse";
import { UpdateAdRules } from "../definitions/UpdateAdRules";
import { UpdateAdRulesResponse } from "../definitions/UpdateAdRulesResponse";
import { UpdateAdSpots } from "../definitions/UpdateAdSpots";
import { UpdateAdSpotsResponse } from "../definitions/UpdateAdSpotsResponse";
import { UpdateBreakTemplates } from "../definitions/UpdateBreakTemplates";
import { UpdateBreakTemplatesResponse } from "../definitions/UpdateBreakTemplatesResponse";

export interface AdRuleServiceInterfacePort {
    createAdRules(createAdRules: CreateAdRules, callback: (err: any, result: CreateAdRulesResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    createAdSpots(createAdSpots: CreateAdSpots, callback: (err: any, result: CreateAdSpotsResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    createBreakTemplates(createBreakTemplates: CreateBreakTemplates, callback: (err: any, result: CreateBreakTemplatesResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getAdRulesByStatement(getAdRulesByStatement: GetAdRulesByStatement, callback: (err: any, result: GetAdRulesByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getAdSpotsByStatement(getAdSpotsByStatement: GetAdSpotsByStatement, callback: (err: any, result: GetAdSpotsByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getBreakTemplatesByStatement(getBreakTemplatesByStatement: GetBreakTemplatesByStatement, callback: (err: any, result: GetBreakTemplatesByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    performAdRuleAction(performAdRuleAction: PerformAdRuleAction, callback: (err: any, result: PerformAdRuleActionResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    updateAdRules(updateAdRules: UpdateAdRules, callback: (err: any, result: UpdateAdRulesResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    updateAdSpots(updateAdSpots: UpdateAdSpots, callback: (err: any, result: UpdateAdSpotsResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    updateBreakTemplates(updateBreakTemplates: UpdateBreakTemplates, callback: (err: any, result: UpdateBreakTemplatesResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
