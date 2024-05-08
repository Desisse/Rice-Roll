import React, { useContext, useEffect, useState } from "react";
import { Order } from "../../../../../Domain/entities/Order";
import { GetDeliveryMenUserUseCase } from "../../../../../Domain/useCase/user/GetDeliveryMenUser";
import { User } from "../../../../../Domain/entities/User";
import { UpdatedToDispatchedUseCase } from "../../../../../Domain/useCase/order/UpdatedToDispatched";
import { OrderContext } from "../../../../../Presentation/context/OrderContext";

interface DropDownProps {
  label: string, 
  value: string

}

export const ClientOrderDetailViewModel = (order: Order) => {
  const [total, setTotal] = useState(0.0);
  const [deliveryMen, setDeliveryMen] = useState<User[]>([]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState<DropDownProps[]>([]);
  const [responseMessage, setResponseMessage] = useState('');
  const { updateToOnTheWay } = useContext(OrderContext);



  const updateToOnTheWayOrder = async() => {
    const result = await updateToOnTheWay(order);
    setResponseMessage(result.message);

    
  }
  


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
    setOpen,
    setValue,
    setItems,
    updateToOnTheWayOrder
  };
};

export default ClientOrderDetailViewModel;
