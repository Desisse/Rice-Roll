import { useContext, useState } from "react";
import { GetByStatusOrderUseCase } from "../../../../../Domain/useCase/order/GetByStatusOrder";
import { Order } from "../../../../../Domain/entities/Order";
import { OrderContext } from "../../../../../Presentation/context/OrderContext";

export const AdminOrderViewModel = () => {

    // const [orders, setOrders] = useState<Order[]>([]);
    const { ordersPayed, ordersDispatched, ordersOnTheWay, ordersDelivery, getOrdersByStatus} = useContext(OrderContext);

    const getOrders = async (status: string) => {
        const result = await getOrdersByStatus(status);
        // setOrders(result);
        console.log('ORDENES: ' + JSON.stringify(result, null, 3));
        
    }

    return {
        ordersPayed,
        ordersDispatched,
        ordersOnTheWay,
        ordersDelivery,
        getOrders
    }
}

export default AdminOrderViewModel;