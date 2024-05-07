import React, { useEffect, useState } from "react";
import { Order } from "../../../../../Domain/entities/Order";
import { GetDeliveryMenUserUseCase } from "../../../../../Domain/useCase/user/GetDeliveryMenUser";
import { User } from "../../../../../Domain/entities/User";

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

  useEffect(() => {
    setDropDownItems();
  }, [deliveryMen])


  const dispatchOrder = () => {
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
    getTotal,
    getDeliveryMen,
    setOpen,
    setValue,
    setItems,
    dispatchOrder
  };
};

export default AdminOrderDetailViewModel;
