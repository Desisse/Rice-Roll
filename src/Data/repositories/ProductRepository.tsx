import { ImagePickerAsset } from "expo-image-picker";
import { Product } from "../../Domain/entities/Product";
import { ProductRepository } from "../../Domain/repositories/ProductRepository";
import { ResponseApiRice } from "../sources/remote/models/ResponseApiRice";
import { AxiosError } from "axios";
import mime from 'mime';
import { ApiRiceRollForImage, ApiRiceRoll } from "../sources/remote/api/ApiRiceRoll";

export class ProductRepositoryImpl implements ProductRepository {

  async getProductsByCategory(id_category: string): Promise<Product[]> {
    try {
      const response = await ApiRiceRoll.get<Product[]>(`/products/findByCategory/${id_category}`);
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log("ERROR:" + JSON.stringify(e.response?.data));
      return Promise.resolve([]);
            
    }
  }

    async create(product: Product, files: ImagePickerAsset[]): Promise<ResponseApiRice> {
        try {
            let data = new FormData();

            files.forEach(file => {
                data.append("image", {
                      //@ts-ignore
                      uri: file.uri,
                      name: file.uri.split("/").pop(),
                      type: mime.getType(file.uri)!,
                    },
                    undefined
                  );
            });

      data.append("product", JSON.stringify(product));
      const response = await ApiRiceRollForImage.post<ResponseApiRice>("/products/create", data);
      return Promise.resolve(response.data);

        } catch (error) {
            let e = error as AxiosError;
      console.log("ERROR:" + JSON.stringify(e.response?.data));
      const apiError: ResponseApiRice = JSON.parse(
        JSON.stringify(e.response?.data)
      );
      return Promise.resolve(apiError);
            
        }
    }
}