import { ResponseApiRice } from "../../Data/sources/remote/models/ResponseApiRice";
import { Order } from "../entities/Order";

export interface OrderRepository {
    create(order: Order): Promise<ResponseApiRice>;
}