import { Category } from "../../Domain/entities/Category";
import { CategoryRepository } from "../../Domain/repositories/CategoryRepository";
import {
  ApiRiceRoll,
  ApiRiceRollForImage,
} from "../sources/remote/api/ApiRiceRoll";
import { ResponseApiRice } from "../sources/remote/models/ResponseApiRice";
import * as ImagePicker from "expo-image-picker";
import mime from "mime";
import axios, { AxiosError } from "axios";

export class CategoryRepositoryImpl implements CategoryRepository {

  async getAll(): Promise<Category[]> {
    try {
      const response = await ApiRiceRoll.get<Category[]>("/categories/getAll");
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log("ERROR:" + JSON.stringify(e.response?.data));
      return Promise.resolve([]);
    }
  }

  async create(category: Category, file: ImagePicker.ImagePickerAsset): Promise<ResponseApiRice> {
    try {
      let data = new FormData();
      data.append(
        "image",
        {
          //@ts-ignore
          uri: file.uri,
          name: file.uri.split("/").pop(),
          type: mime.getType(file.uri)!,
        },
        undefined
      );

      data.append("category", JSON.stringify(category));
      const response = await ApiRiceRollForImage.post<ResponseApiRice>(
        "/categories/create",
        data
      );
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

  async update(category: Category): Promise<ResponseApiRice> {
    try {
      const response = await ApiRiceRoll.put<ResponseApiRice>("/categories/update", category);
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

  async updateWithImage(category: Category, file: ImagePicker.ImagePickerAsset): Promise<ResponseApiRice> {
    try {
      let data = new FormData();
      data.append(
        "image",
        {
          //@ts-ignore
          uri: file.uri,
          name: file.uri.split("/").pop(),
          type: mime.getType(file.uri)!,
        },
        undefined
      );

      data.append("category", JSON.stringify(category));
      const response = await ApiRiceRollForImage.put<ResponseApiRice>(
        "/categories/updateWithImage",
        data
      );
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

  async remove(id: string): Promise<ResponseApiRice> {
    try {
      const response = await ApiRiceRoll.delete<ResponseApiRice>(`/categories/delete/${id}`);
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
