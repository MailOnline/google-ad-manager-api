import { CreateCreativeWrappers } from "../definitions/CreateCreativeWrappers";
import { CreateCreativeWrappersResponse } from "../definitions/CreateCreativeWrappersResponse";
import { GetCreativeWrappersByStatement } from "../definitions/GetCreativeWrappersByStatement";
import { GetCreativeWrappersByStatementResponse } from "../definitions/GetCreativeWrappersByStatementResponse";
import { PerformCreativeWrapperAction } from "../definitions/PerformCreativeWrapperAction";
import { PerformCreativeWrapperActionResponse } from "../definitions/PerformCreativeWrapperActionResponse";
import { UpdateCreativeWrappers } from "../definitions/UpdateCreativeWrappers";
import { UpdateCreativeWrappersResponse } from "../definitions/UpdateCreativeWrappersResponse";

export interface CreativeWrapperServiceInterfacePort {
    createCreativeWrappers(createCreativeWrappers: CreateCreativeWrappers, callback: (err: any, result: CreateCreativeWrappersResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getCreativeWrappersByStatement(getCreativeWrappersByStatement: GetCreativeWrappersByStatement, callback: (err: any, result: GetCreativeWrappersByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    performCreativeWrapperAction(performCreativeWrapperAction: PerformCreativeWrapperAction, callback: (err: any, result: PerformCreativeWrapperActionResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    updateCreativeWrappers(updateCreativeWrappers: UpdateCreativeWrappers, callback: (err: any, result: UpdateCreativeWrappersResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
