import { CreateOrders } from "../definitions/CreateOrders";
import { CreateOrdersResponse } from "../definitions/CreateOrdersResponse";
import { GetOrdersByStatement } from "../definitions/GetOrdersByStatement";
import { GetOrdersByStatementResponse } from "../definitions/GetOrdersByStatementResponse";
import { PerformOrderAction } from "../definitions/PerformOrderAction";
import { PerformOrderActionResponse } from "../definitions/PerformOrderActionResponse";
import { UpdateOrders } from "../definitions/UpdateOrders";
import { UpdateOrdersResponse } from "../definitions/UpdateOrdersResponse";

export interface OrderServiceInterfacePort {
    createOrders(createOrders: CreateOrders, callback: (err: any, result: CreateOrdersResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    getOrdersByStatement(getOrdersByStatement: GetOrdersByStatement, callback: (err: any, result: GetOrdersByStatementResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    performOrderAction(performOrderAction: PerformOrderAction, callback: (err: any, result: PerformOrderActionResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    updateOrders(updateOrders: UpdateOrders, callback: (err: any, result: UpdateOrdersResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
