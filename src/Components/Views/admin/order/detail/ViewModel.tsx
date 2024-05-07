import React, { useEffect, useState } from "react";
import { Order } from "../../../../../Domain/entities/Order";
import { GetDeliveryMenUserUseCase } from "../../../../../Domain/useCase/user/GetDeliveryMenUser";
import { User } from "../../../../../Domain/entities/User";
import { UpdatedToDispatchedUseCase } from "../../../../../Domain/useCase/order/UpdatedToDispatched";

interface DropDownProps {
  label: string, 
  value: string

}

export const AdminOrderDetailViewModel = (order: Order) => {
  const [total, setTotal] = useState(0.0);
  const [deliveryMen, setDeliveryMen] = useState<User[]>([]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState<DropDownProps[]>([]);
  const [responseMessage, setResponseMessage] = useState('')

  useEffect(() => {
    setDropDownItems();
  }, [deliveryMen])


  const dispatchOrder = async() => {
    if(value !== null) {
      order.id_delivery = value!;
      const result = await UpdatedToDispatchedUseCase(order);
      setResponseMessage(result.message);
    } else {
      setResponseMessage('Asigna un repartidor');
    }
    console.log('REPARTIDOR ASIGNADO: ' + value);
    
  }
  

  const setDropDownItems = () => {
    let itemsDeliveryMen: DropDownProps[] = [];
    deliveryMen.forEach(delivery => {
      itemsDeliveryMen.push({
        label: delivery.name + ' ' + delivery.lastname,
        value: delivery.id!
      })
    });
    setItems(itemsDeliveryMen);
  }

  const getDeliveryMen = async () => {
    const result = await GetDeliveryMenUserUseCase();
    console.log("REPARTIDORES: " + JSON.stringify(result, null, 3));
    setDeliveryMen(result);
  };

  const getTotal = () => {
    order.products.forEach((p) => {
      setTotal(total + p.price * p.quantity!);
    });
    return total;
  };
  return {
    total,
    deliveryMen,
    open,
    value,
    items,
    responseMessage,
    getTotal,
    getDeliveryMen,
    setOpen,
    setValue,
    setItems,
    dispatchOrder
  };
};

export default AdminOrderDetailViewModel;
