import { OrderRepositoryImpl } from "../../../Data/repositories/OrderRepository";
import { Order } from "../../entities/Order";

const { getByDeliveryAndStatus } = new OrderRepositoryImpl();


export const GetByDeliveryAndStatusOrderUseCase = async(id_delivery: string, status: string) => {
  return await getByDeliveryAndStatus(id_delivery,status);
}
