import { useContext, useEffect, useState } from "react";
import { GetByStatusOrderUseCase } from "../../../../../Domain/useCase/order/GetByStatusOrder";
import { Order } from "../../../../../Domain/entities/Order";
import { OrderContext } from "../../../../../Presentation/context/OrderContext";
import { UserContext } from "../../../../../Presentation/context/UserContext";

export const ClientOrderViewModel = () => {

    // const [orders, setOrders] = useState<Order[]>([]);
    const { ordersPayed, ordersDispatched, ordersOnTheWay, ordersDelivery, getOrdersByClientAndStatus} = useContext(OrderContext);
    const { user } = useContext(UserContext);



    const getOrders = async (id_client: string, status: string) => {
        const result = await getOrdersByClientAndStatus(id_client, status);
        // setOrders(result);
        console.log('ORDENES: ' + JSON.stringify(result, null, 3));
        
    }

    return {
        ordersPayed,
        ordersDispatched,
        ordersOnTheWay,
        ordersDelivery,
        user,
        getOrders,
    }
}

export default ClientOrderViewModel;