import { CreatePlacements } from "../definitions/CreatePlacements";
import { CreatePlacementsResponse } from "../definitions/CreatePlacementsResponse";
import { GetPlacementsByStatement } from "../definitions/GetPlacementsByStatement";
import { GetPlacementsByStatementResponse } from "../definitions/GetPlacementsByStatementResponse";
import { PerformPlacementAction } from "../definitions/PerformPlacementAction";
import { PerformPlacementActionResponse } from "../definitions/PerformPlacementActionResponse";
import { UpdatePlacements } from "../definitions/UpdatePlacements";
import { UpdatePlacementsResponse } from "../definitions/UpdatePlacementsResponse";

export interface PlacementServiceInterfacePort {
    createPlacements(createPlacements: CreatePlacements, callback: (err: any, result: CreatePlacementsResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getPlacementsByStatement(getPlacementsByStatement: GetPlacementsByStatement, callback: (err: any, result: GetPlacementsByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    performPlacementAction(performPlacementAction: PerformPlacementAction, callback: (err: any, result: PerformPlacementActionResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    updatePlacements(updatePlacements: UpdatePlacements, callback: (err: any, result: UpdatePlacementsResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
