import { ShoppingBagRepositoryImpl } from "../../../Data/repositories/ShoppingBagRepository";
import React from 'react'
import { Product } from "../../entities/Product";

const { save } = new ShoppingBagRepositoryImpl();


export const SaveShoppingBagUseCase = async (products: Product[]) => {
  return await save(products);
}
