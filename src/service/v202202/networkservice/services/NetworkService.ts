import { NetworkServiceInterfacePort } from "../ports/NetworkServiceInterfacePort";

export interface NetworkService {
    readonly NetworkServiceInterfacePort: NetworkServiceInterfacePort;
}
