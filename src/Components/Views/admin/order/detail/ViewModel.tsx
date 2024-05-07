import React, { useEffect, useState } from 'react'
import { Order } from '../../../../../Domain/entities/Order'

export const AdminOrderDetailViewModel = (order: Order) => {

    const [total, setTotal] = useState(0.0);

    useEffect(() => {
        if(total == 0.0){
            getTotal();
        }
    }, [])
    

    const getTotal = () => {
        order.products.forEach(p => {
           setTotal(total + (p.price * p.quantity!)); 
        });
        return total;
    }
  return {
    total,
    getTotal
  }
}

export default AdminOrderDetailViewModel;
