import { CompanyServiceInterfacePort } from "../ports/CompanyServiceInterfacePort";

export interface CompanyService {
    readonly CompanyServiceInterfacePort: CompanyServiceInterfacePort;
}
