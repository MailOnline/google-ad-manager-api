import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { CreateLabels } from "./definitions/CreateLabels";
import { CreateLabelsResponse } from "./definitions/CreateLabelsResponse";
import { GetLabelsByStatement } from "./definitions/GetLabelsByStatement";
import { GetLabelsByStatementResponse } from "./definitions/GetLabelsByStatementResponse";
import { PerformLabelAction } from "./definitions/PerformLabelAction";
import { PerformLabelActionResponse } from "./definitions/PerformLabelActionResponse";
import { UpdateLabels } from "./definitions/UpdateLabels";
import { UpdateLabelsResponse } from "./definitions/UpdateLabelsResponse";
import { LabelService } from "./services/LabelService";

export interface LabelServiceClient extends SoapClient {
    LabelService: LabelService;
    createLabelsAsync(createLabels: CreateLabels): Promise<[result: CreateLabelsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getLabelsByStatementAsync(getLabelsByStatement: GetLabelsByStatement): Promise<[result: GetLabelsByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    performLabelActionAsync(performLabelAction: PerformLabelAction): Promise<[result: PerformLabelActionResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    updateLabelsAsync(updateLabels: UpdateLabels): Promise<[result: UpdateLabelsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create LabelServiceClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<LabelServiceClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
