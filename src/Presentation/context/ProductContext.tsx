import { createContext, useState } from "react";
import { ResponseApiRice } from "../../Data/sources/remote/models/ResponseApiRice";
import { Product } from "../../Domain/entities/Product";
import * as ImagePicker from "expo-image-picker";
import { CreateProductUseCase } from "../../Domain/useCase/product/CreateProduct";
import { GetProductsByCategoryUseCase } from "../../Domain/useCase/product/GetProductsByCategory";
import { DeleteProductUseCase } from "../../Domain/useCase/product/DeleteProduct";

export interface ProductContextProps {
    products: Product[],
    getProducts(id_category: string): Promise<void>,
    create(product: Product, files: ImagePicker.ImagePickerAsset[]): Promise<ResponseApiRice>,
    remove(product: Product): Promise<ResponseApiRice>
}

export const ProductContext = createContext({} as ProductContextProps);

export const ProductProvider = ({children}: any) => {

    const [products, setProducts] = useState<Product[]>([])

    const getProducts = async (id_category: string): Promise<void> => {
        const result = await GetProductsByCategoryUseCase(id_category);
        setProducts(result);
    }

    const create = async (product: Product, files: ImagePicker.ImagePickerAsset[]): Promise<ResponseApiRice> => {
        const response = await CreateProductUseCase(product, files);
        getProducts(product.id_category!);
        return response;
    }

    const remove = async (product: Product): Promise<ResponseApiRice> => {
        const response = await DeleteProductUseCase(product);
        getProducts(product.id_category!);
        return response;
    }

    return (
        <ProductContext.Provider value={{
            products,
            getProducts,
            create,
            remove
        }}>
            {children}
        </ProductContext.Provider>
    )
}