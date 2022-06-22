import { CustomFieldServiceInterfacePort } from "../ports/CustomFieldServiceInterfacePort";

export interface CustomFieldService {
    readonly CustomFieldServiceInterfacePort: CustomFieldServiceInterfacePort;
}
