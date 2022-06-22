import { MobileApplicationServiceInterfacePort } from "../ports/MobileApplicationServiceInterfacePort";

export interface MobileApplicationService {
    readonly MobileApplicationServiceInterfacePort: MobileApplicationServiceInterfacePort;
}
