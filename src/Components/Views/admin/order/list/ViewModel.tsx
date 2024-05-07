import { useState } from "react";
import { GetByStatusOrderUseCase } from "../../../../../Domain/useCase/order/GetByStatusOrder";
import { Order } from "../../../../../Domain/entities/Order";

export const AdminOrderViewModel = () => {

    const [orders, setOrders] = useState<Order[]>([]);

    const getOrders = async (status: string) => {
        const result = await GetByStatusOrderUseCase(status);
        setOrders(result);
        console.log('ORDENES: ' + JSON.stringify(result, null, 3));
        
    }

    return {
        orders,
        getOrders
    }
}

export default AdminOrderViewModel;