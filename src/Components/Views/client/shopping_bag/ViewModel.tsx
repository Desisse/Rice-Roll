import React, { useContext } from 'react'
import { ShoppingBagContext } from '../../../../Presentation/context/ShoppingBagContext';
import { Product } from '../../../../Domain/entities/Product';

const ClientShoppingBagViewModel = () => {

    const {shoppingBag, saveItem, deleteItem, total} = useContext(ShoppingBagContext);
    
    const addItem = async(product: Product) => {
      product.quantity = product.quantity! + 1;
      await saveItem(product);
    }

    const sustractItem = async(product: Product) => {
      if(product.quantity! > 1) {
        product.quantity = product.quantity! - 1;
        await saveItem(product);
      }
    }
    

  return {
    shoppingBag,
    total,
    addItem,
    sustractItem,
    deleteItem
  }
}

export default ClientShoppingBagViewModel;
