import { OrderServiceInterfacePort } from "../ports/OrderServiceInterfacePort";

export interface OrderService {
    readonly OrderServiceInterfacePort: OrderServiceInterfacePort;
}
