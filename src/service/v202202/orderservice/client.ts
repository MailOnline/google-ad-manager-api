import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { CreateOrders } from "./definitions/CreateOrders";
import { CreateOrdersResponse } from "./definitions/CreateOrdersResponse";
import { GetOrdersByStatement } from "./definitions/GetOrdersByStatement";
import { GetOrdersByStatementResponse } from "./definitions/GetOrdersByStatementResponse";
import { PerformOrderAction } from "./definitions/PerformOrderAction";
import { PerformOrderActionResponse } from "./definitions/PerformOrderActionResponse";
import { UpdateOrders } from "./definitions/UpdateOrders";
import { UpdateOrdersResponse } from "./definitions/UpdateOrdersResponse";
import { OrderService } from "./services/OrderService";

export interface OrderServiceClient extends SoapClient {
    OrderService: OrderService;
    createOrdersAsync(createOrders: CreateOrders): Promise<[result: CreateOrdersResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    getOrdersByStatementAsync(getOrdersByStatement: GetOrdersByStatement): Promise<[result: GetOrdersByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    performOrderActionAsync(performOrderAction: PerformOrderAction): Promise<[result: PerformOrderActionResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    updateOrdersAsync(updateOrders: UpdateOrders): Promise<[result: UpdateOrdersResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create OrderServiceClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<OrderServiceClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
