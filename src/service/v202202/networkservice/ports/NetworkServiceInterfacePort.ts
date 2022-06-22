import { GetAllNetworks } from "../definitions/GetAllNetworks";
import { GetAllNetworksResponse } from "../definitions/GetAllNetworksResponse";
import { GetCurrentNetwork } from "../definitions/GetCurrentNetwork";
import { GetCurrentNetworkResponse } from "../definitions/GetCurrentNetworkResponse";
import { GetDefaultThirdPartyDataDeclaration } from "../definitions/GetDefaultThirdPartyDataDeclaration";
import { GetDefaultThirdPartyDataDeclarationResponse } from "../definitions/GetDefaultThirdPartyDataDeclarationResponse";
import { MakeTestNetwork } from "../definitions/MakeTestNetwork";
import { MakeTestNetworkResponse } from "../definitions/MakeTestNetworkResponse";
import { UpdateNetwork } from "../definitions/UpdateNetwork";
import { UpdateNetworkResponse } from "../definitions/UpdateNetworkResponse";

export interface NetworkServiceInterfacePort {
    getAllNetworks(getAllNetworks: GetAllNetworks, callback: (err: any, result: GetAllNetworksResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getCurrentNetwork(getCurrentNetwork: GetCurrentNetwork, callback: (err: any, result: GetCurrentNetworkResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getDefaultThirdPartyDataDeclaration(getDefaultThirdPartyDataDeclaration: GetDefaultThirdPartyDataDeclaration, callback: (err: any, result: GetDefaultThirdPartyDataDeclarationResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    makeTestNetwork(makeTestNetwork: MakeTestNetwork, callback: (err: any, result: MakeTestNetworkResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    updateNetwork(updateNetwork: UpdateNetwork, callback: (err: any, result: UpdateNetworkResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
