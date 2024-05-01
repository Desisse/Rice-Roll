import { createContext } from "react";
import { ResponseApiRice } from "../../Data/sources/remote/models/ResponseApiRice";
import { Product } from "../../Domain/entities/Product";
import * as ImagePicker from "expo-image-picker";
import { CreateProductUseCase } from "../../Domain/useCase/product/CreateProduct";

export interface ProductContextProps {
    create(product: Product, files: ImagePicker.ImagePickerAsset[]): Promise<ResponseApiRice>
}

export const ProductContext = createContext({} as ProductContextProps);

export const ProductProvider = ({children}: any) => {
    const create = async (product: Product, files: ImagePicker.ImagePickerAsset[]): Promise<ResponseApiRice> => {
        const response = await CreateProductUseCase(product, files);
        return response;
    }

    return (
        <ProductContext.Provider value={{
            create
        }}>
            {children}
        </ProductContext.Provider>
    )
}