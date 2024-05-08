import { ResponseApiRice } from "../../Data/sources/remote/models/ResponseApiRice";
import { Order } from "../entities/Order";

export interface StripeRepository {
    createPayment(id: string, amount: number, order: Order): Promise<ResponseApiRice>;
}