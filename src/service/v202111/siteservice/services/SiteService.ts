import { SiteServiceInterfacePort } from "../ports/SiteServiceInterfacePort";

export interface SiteService {
    readonly SiteServiceInterfacePort: SiteServiceInterfacePort;
}
