import { CreateCdnConfigurations } from "../definitions/CreateCdnConfigurations";
import { CreateCdnConfigurationsResponse } from "../definitions/CreateCdnConfigurationsResponse";
import { GetCdnConfigurationsByStatement } from "../definitions/GetCdnConfigurationsByStatement";
import { GetCdnConfigurationsByStatementResponse } from "../definitions/GetCdnConfigurationsByStatementResponse";
import { PerformCdnConfigurationAction } from "../definitions/PerformCdnConfigurationAction";
import { PerformCdnConfigurationActionResponse } from "../definitions/PerformCdnConfigurationActionResponse";
import { UpdateCdnConfigurations } from "../definitions/UpdateCdnConfigurations";
import { UpdateCdnConfigurationsResponse } from "../definitions/UpdateCdnConfigurationsResponse";

export interface CdnConfigurationServiceInterfacePort {
    createCdnConfigurations(createCdnConfigurations: CreateCdnConfigurations, callback: (err: any, result: CreateCdnConfigurationsResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getCdnConfigurationsByStatement(getCdnConfigurationsByStatement: GetCdnConfigurationsByStatement, callback: (err: any, result: GetCdnConfigurationsByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    performCdnConfigurationAction(performCdnConfigurationAction: PerformCdnConfigurationAction, callback: (err: any, result: PerformCdnConfigurationActionResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    updateCdnConfigurations(updateCdnConfigurations: UpdateCdnConfigurations, callback: (err: any, result: UpdateCdnConfigurationsResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
