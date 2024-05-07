import { createContext, useEffect, useState } from "react";
import { ResponseApiRice } from "../../Data/sources/remote/models/ResponseApiRice";
import { Order } from "../../Domain/entities/Order";
import { GetByStatusOrderUseCase } from "../../Domain/useCase/order/GetByStatusOrder";
import { UpdatedToDispatchedUseCase } from "../../Domain/useCase/order/UpdatedToDispatched";
import { GetByDeliveryAndStatusOrderUseCase } from "../../Domain/useCase/order/GetByDeliveryAndStatus";
import { UpdatedToOnTheWayUseCase } from "../../Domain/useCase/order/UpdateToOnTheWay";

export interface OrderContextProps {
    ordersPayed: Order[],
    ordersDispatched: Order[],
    ordersOnTheWay: Order[],
    ordersDelivery: Order[],
    getOrdersByStatus(status: string): Promise<void>,
    getOrdersByDeliveryAndStatus(id_delivery: string, status: string): Promise<void>,
    updateToDispatched(order: Order): Promise<ResponseApiRice>,
    updateToOnTheWay(order: Order): Promise<ResponseApiRice>,
    
}

export const OrderContext= createContext({} as OrderContextProps);
export const OrderProvider = ({children}: any) => {

    const [ordersPayed, setOrdersPayed] = useState<Order[]>([]);
    const [ordersDispatched, setOrdersDispatched] = useState<Order[]>([]);
    const [ordersOnTheWay, setOrdersOnTheWay] = useState<Order[]>([]);
    const [ordersDelivery, setOrdersDelivery] = useState<Order[]>([]);

    useEffect(() => {
        setOrdersPayed([]);
        setOrdersDispatched([]);
        setOrdersOnTheWay([]);
        setOrdersDelivery([]);
    }, [])
    




    const getOrdersByStatus = async(status: string) => {
        const result = await GetByStatusOrderUseCase(status);
        if(status === 'PAGADO') {
            setOrdersPayed(result);
        }
        else if(status === 'DESPACHADO') {
            setOrdersDispatched(result);
        }
        else if(status === 'EN CAMINO') {
            setOrdersOnTheWay(result);
        }
        else if(status === 'ENTREGADO') {
            setOrdersDelivery(result);
        }
    }


    const getOrdersByDeliveryAndStatus = async(id_delivery: string, status: string) => {
        const result = await GetByDeliveryAndStatusOrderUseCase(id_delivery, status);
        if(status === 'PAGADO') {
            setOrdersPayed(result);
        }
        else if(status === 'DESPACHADO') {
            setOrdersDispatched(result);
        }
        else if(status === 'EN CAMINO') {
            setOrdersOnTheWay(result);
        }
        else if(status === 'ENTREGADO') {
            setOrdersDelivery(result);
        }
    }

    const updateToDispatched = async(order: Order) => {
        const result = await UpdatedToDispatchedUseCase(order);
        getOrdersByStatus('PAGADO');
        getOrdersByStatus('DESPACHADO');
        return result;
    }

    const updateToOnTheWay= async(order: Order) => {
        const result = await UpdatedToOnTheWayUseCase(order);
        getOrdersByDeliveryAndStatus(order.id_delivery!,'DESPACHADO');
        getOrdersByDeliveryAndStatus(order.id_delivery!,'EN CAMINO');
        return result;
    }

    return (
        <OrderContext.Provider
        value={{
            ordersPayed,
            ordersDispatched,
            ordersOnTheWay,
            ordersDelivery,
            getOrdersByStatus,
            getOrdersByDeliveryAndStatus,
            updateToDispatched,
            updateToOnTheWay
        }}
        >
            {children}
        </OrderContext.Provider>
    )
}