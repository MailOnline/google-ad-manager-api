import { InventoryServiceInterfacePort } from "../ports/InventoryServiceInterfacePort";

export interface InventoryService {
    readonly InventoryServiceInterfacePort: InventoryServiceInterfacePort;
}
