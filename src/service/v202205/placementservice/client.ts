import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { CreatePlacements } from "./definitions/CreatePlacements";
import { CreatePlacementsResponse } from "./definitions/CreatePlacementsResponse";
import { GetPlacementsByStatement } from "./definitions/GetPlacementsByStatement";
import { GetPlacementsByStatementResponse } from "./definitions/GetPlacementsByStatementResponse";
import { PerformPlacementAction } from "./definitions/PerformPlacementAction";
import { PerformPlacementActionResponse } from "./definitions/PerformPlacementActionResponse";
import { UpdatePlacements } from "./definitions/UpdatePlacements";
import { UpdatePlacementsResponse } from "./definitions/UpdatePlacementsResponse";
import { PlacementService } from "./services/PlacementService";

export interface PlacementServiceClient extends SoapClient {
    PlacementService: PlacementService;
    createPlacementsAsync(createPlacements: CreatePlacements): Promise<[result: CreatePlacementsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getPlacementsByStatementAsync(getPlacementsByStatement: GetPlacementsByStatement): Promise<[result: GetPlacementsByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    performPlacementActionAsync(performPlacementAction: PerformPlacementAction): Promise<[result: PerformPlacementActionResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    updatePlacementsAsync(updatePlacements: UpdatePlacements): Promise<[result: UpdatePlacementsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create PlacementServiceClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<PlacementServiceClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
