import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { CreateAdUnits } from "./definitions/CreateAdUnits";
import { CreateAdUnitsResponse } from "./definitions/CreateAdUnitsResponse";
import { GetAdUnitSizesByStatement } from "./definitions/GetAdUnitSizesByStatement";
import { GetAdUnitSizesByStatementResponse } from "./definitions/GetAdUnitSizesByStatementResponse";
import { GetAdUnitsByStatement } from "./definitions/GetAdUnitsByStatement";
import { GetAdUnitsByStatementResponse } from "./definitions/GetAdUnitsByStatementResponse";
import { PerformAdUnitAction } from "./definitions/PerformAdUnitAction";
import { PerformAdUnitActionResponse } from "./definitions/PerformAdUnitActionResponse";
import { UpdateAdUnits } from "./definitions/UpdateAdUnits";
import { UpdateAdUnitsResponse } from "./definitions/UpdateAdUnitsResponse";
import { InventoryService } from "./services/InventoryService";

export interface InventoryServiceClient extends SoapClient {
    InventoryService: InventoryService;
    createAdUnitsAsync(createAdUnits: CreateAdUnits): Promise<[result: CreateAdUnitsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getAdUnitSizesByStatementAsync(getAdUnitSizesByStatement: GetAdUnitSizesByStatement): Promise<[result: GetAdUnitSizesByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getAdUnitsByStatementAsync(getAdUnitsByStatement: GetAdUnitsByStatement): Promise<[result: GetAdUnitsByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    performAdUnitActionAsync(performAdUnitAction: PerformAdUnitAction): Promise<[result: PerformAdUnitActionResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    updateAdUnitsAsync(updateAdUnits: UpdateAdUnits): Promise<[result: UpdateAdUnitsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create InventoryServiceClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<InventoryServiceClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
