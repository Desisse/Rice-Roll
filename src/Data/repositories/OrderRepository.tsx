import { AxiosError } from "axios";
import { Order } from "../../Domain/entities/Order";
import { OrderRepository } from "../../Domain/repositories/OrderRepository";
import { ResponseApiRice } from "../sources/remote/models/ResponseApiRice";
import { ApiRiceRoll } from "../sources/remote/api/ApiRiceRoll";

export class OrderRepositoryImpl implements OrderRepository {

  async getByStatus(status: string): Promise<Order[]> {
    try {
      const response = await ApiRiceRoll.get<Order[]>(`/orders/findByStatus/${status}`)
      return Promise.resolve(response.data);
      
    } catch (error) {
      let e = error as AxiosError;
      console.log("ERROR:" + JSON.stringify(e.response?.data));
      return Promise.resolve([]);

    }
    
  }

  async create(order: Order): Promise<ResponseApiRice> {
    try {
        const response = await ApiRiceRoll.post<ResponseApiRice>('/orders/create', order);
        return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log("ERROR:" + JSON.stringify(e.response?.data));
      const apiError: ResponseApiRice = JSON.parse(JSON.stringify(e.response?.data));
      return Promise.resolve(apiError);
    }
  }
}
