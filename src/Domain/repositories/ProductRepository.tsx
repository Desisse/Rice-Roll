import { ResponseApiRice } from "../../Data/sources/remote/models/ResponseApiRice";
import { Product } from "../entities/Product";
import * as ImagePicker from "expo-image-picker";

export interface ProductRepository {
    create(product: Product, files: ImagePicker.ImagePickerAsset[]): Promise<ResponseApiRice>;
    getProductsByCategory(id_category: string): Promise<Product[]>;
}