import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { CreateCdnConfigurations } from "./definitions/CreateCdnConfigurations";
import { CreateCdnConfigurationsResponse } from "./definitions/CreateCdnConfigurationsResponse";
import { GetCdnConfigurationsByStatement } from "./definitions/GetCdnConfigurationsByStatement";
import { GetCdnConfigurationsByStatementResponse } from "./definitions/GetCdnConfigurationsByStatementResponse";
import { PerformCdnConfigurationAction } from "./definitions/PerformCdnConfigurationAction";
import { PerformCdnConfigurationActionResponse } from "./definitions/PerformCdnConfigurationActionResponse";
import { UpdateCdnConfigurations } from "./definitions/UpdateCdnConfigurations";
import { UpdateCdnConfigurationsResponse } from "./definitions/UpdateCdnConfigurationsResponse";
import { CdnConfigurationService } from "./services/CdnConfigurationService";

export interface CdnConfigurationServiceClient extends SoapClient {
    CdnConfigurationService: CdnConfigurationService;
    createCdnConfigurationsAsync(createCdnConfigurations: CreateCdnConfigurations): Promise<[result: CreateCdnConfigurationsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getCdnConfigurationsByStatementAsync(getCdnConfigurationsByStatement: GetCdnConfigurationsByStatement): Promise<[result: GetCdnConfigurationsByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    performCdnConfigurationActionAsync(performCdnConfigurationAction: PerformCdnConfigurationAction): Promise<[result: PerformCdnConfigurationActionResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    updateCdnConfigurationsAsync(updateCdnConfigurations: UpdateCdnConfigurations): Promise<[result: UpdateCdnConfigurationsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create CdnConfigurationServiceClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<CdnConfigurationServiceClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
