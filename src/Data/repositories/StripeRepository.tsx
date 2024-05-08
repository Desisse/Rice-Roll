import { AxiosError } from "axios";
import { Order } from "../../Domain/entities/Order";
import { StripeRepository } from "../../Domain/repositories/StripeRepository";
import { ResponseApiRice } from "../sources/remote/models/ResponseApiRice";
import { ApiRiceRoll } from "../sources/remote/api/ApiRiceRoll";

export class StripeRepositoryImpl implements StripeRepository {
    async createPayment(id: string, amount: number, order: Order): Promise<ResponseApiRice> {
        try {
            const response = await ApiRiceRoll.post<ResponseApiRice>('/stripe/create', {
                id: id,
                amount: amount,
                order: order
            });
            return Promise.resolve(response.data);
        } catch (error) {
            let e = error as AxiosError;
            console.log("ERROR:" + JSON.stringify(e.response?.data));
            const apiError: ResponseApiRice = JSON.parse(
              JSON.stringify(e.response?.data)
            );
            return Promise.resolve(apiError);
        }
        
        
    }
}