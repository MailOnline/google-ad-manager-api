import { CreateAdUnits } from "../definitions/CreateAdUnits";
import { CreateAdUnitsResponse } from "../definitions/CreateAdUnitsResponse";
import { GetAdUnitSizesByStatement } from "../definitions/GetAdUnitSizesByStatement";
import { GetAdUnitSizesByStatementResponse } from "../definitions/GetAdUnitSizesByStatementResponse";
import { GetAdUnitsByStatement } from "../definitions/GetAdUnitsByStatement";
import { GetAdUnitsByStatementResponse } from "../definitions/GetAdUnitsByStatementResponse";
import { PerformAdUnitAction } from "../definitions/PerformAdUnitAction";
import { PerformAdUnitActionResponse } from "../definitions/PerformAdUnitActionResponse";
import { UpdateAdUnits } from "../definitions/UpdateAdUnits";
import { UpdateAdUnitsResponse } from "../definitions/UpdateAdUnitsResponse";

export interface InventoryServiceInterfacePort {
    createAdUnits(createAdUnits: CreateAdUnits, callback: (err: any, result: CreateAdUnitsResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getAdUnitSizesByStatement(getAdUnitSizesByStatement: GetAdUnitSizesByStatement, callback: (err: any, result: GetAdUnitSizesByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getAdUnitsByStatement(getAdUnitsByStatement: GetAdUnitsByStatement, callback: (err: any, result: GetAdUnitsByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    performAdUnitAction(performAdUnitAction: PerformAdUnitAction, callback: (err: any, result: PerformAdUnitActionResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    updateAdUnits(updateAdUnits: UpdateAdUnits, callback: (err: any, result: UpdateAdUnitsResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
