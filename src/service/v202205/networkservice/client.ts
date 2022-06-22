import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { GetAllNetworks } from "./definitions/GetAllNetworks";
import { GetAllNetworksResponse } from "./definitions/GetAllNetworksResponse";
import { GetCurrentNetwork } from "./definitions/GetCurrentNetwork";
import { GetCurrentNetworkResponse } from "./definitions/GetCurrentNetworkResponse";
import { GetDefaultThirdPartyDataDeclaration } from "./definitions/GetDefaultThirdPartyDataDeclaration";
import { GetDefaultThirdPartyDataDeclarationResponse } from "./definitions/GetDefaultThirdPartyDataDeclarationResponse";
import { MakeTestNetwork } from "./definitions/MakeTestNetwork";
import { MakeTestNetworkResponse } from "./definitions/MakeTestNetworkResponse";
import { UpdateNetwork } from "./definitions/UpdateNetwork";
import { UpdateNetworkResponse } from "./definitions/UpdateNetworkResponse";
import { NetworkService } from "./services/NetworkService";

export interface NetworkServiceClient extends SoapClient {
    NetworkService: NetworkService;
    getAllNetworksAsync(getAllNetworks: GetAllNetworks): Promise<[result: GetAllNetworksResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getCurrentNetworkAsync(getCurrentNetwork: GetCurrentNetwork): Promise<[result: GetCurrentNetworkResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getDefaultThirdPartyDataDeclarationAsync(getDefaultThirdPartyDataDeclaration: GetDefaultThirdPartyDataDeclaration): Promise<[result: GetDefaultThirdPartyDataDeclarationResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    makeTestNetworkAsync(makeTestNetwork: MakeTestNetwork): Promise<[result: MakeTestNetworkResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    updateNetworkAsync(updateNetwork: UpdateNetwork): Promise<[result: UpdateNetworkResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create NetworkServiceClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<NetworkServiceClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
