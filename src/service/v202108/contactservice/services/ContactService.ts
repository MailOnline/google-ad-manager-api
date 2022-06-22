import { ContactServiceInterfacePort } from "../ports/ContactServiceInterfacePort";

export interface ContactService {
    readonly ContactServiceInterfacePort: ContactServiceInterfacePort;
}
