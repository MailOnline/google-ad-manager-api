import { CreateLabels } from "../definitions/CreateLabels";
import { CreateLabelsResponse } from "../definitions/CreateLabelsResponse";
import { GetLabelsByStatement } from "../definitions/GetLabelsByStatement";
import { GetLabelsByStatementResponse } from "../definitions/GetLabelsByStatementResponse";
import { PerformLabelAction } from "../definitions/PerformLabelAction";
import { PerformLabelActionResponse } from "../definitions/PerformLabelActionResponse";
import { UpdateLabels } from "../definitions/UpdateLabels";
import { UpdateLabelsResponse } from "../definitions/UpdateLabelsResponse";

export interface LabelServiceInterfacePort {
    createLabels(createLabels: CreateLabels, callback: (err: any, result: CreateLabelsResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getLabelsByStatement(getLabelsByStatement: GetLabelsByStatement, callback: (err: any, result: GetLabelsByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    performLabelAction(performLabelAction: PerformLabelAction, callback: (err: any, result: PerformLabelActionResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    updateLabels(updateLabels: UpdateLabels, callback: (err: any, result: UpdateLabelsResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
