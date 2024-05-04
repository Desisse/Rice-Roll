import React from 'react'
import { Product } from '../../../../../Domain/entities/Product';

 const ClientProductDetailViewModel = (product: Product) => {

    const productImages: string[] = [
        product.image1,
        product.image2,
        product.image3
    ];
  return {
    productImages
  }
}

export default ClientProductDetailViewModel;
