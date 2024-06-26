import { ResponseApiRice } from "../../Data/sources/remote/models/ResponseApiRice";
import { Order } from "../entities/Order";

export interface OrderRepository {
    create(order: Order): Promise<ResponseApiRice>;
    getByStatus(status: string): Promise<Order[]>;
    getByDeliveryAndStatus(id_delivery: string, status: string): Promise<Order[]>;
    getByClientAndStatus(id_client: string, status: string): Promise<Order[]>;
    updateToDispatched(order: Order): Promise<ResponseApiRice>;
    updateToOnTheWay(order: Order): Promise<ResponseApiRice>;
    updateToDelivered(order: Order): Promise<ResponseApiRice>;


}