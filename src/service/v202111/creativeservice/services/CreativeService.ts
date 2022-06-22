import { CreativeServiceInterfacePort } from "../ports/CreativeServiceInterfacePort";

export interface CreativeService {
    readonly CreativeServiceInterfacePort: CreativeServiceInterfacePort;
}
