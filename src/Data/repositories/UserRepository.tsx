import { ImagePickerAsset } from "expo-image-picker";
import { User } from "../../Domain/entities/User";
import { UserRepository } from "../../Domain/repositories/UserRepository";
import { ResponseApiRice } from "../sources/remote/models/ResponseApiRice";
import { AxiosError } from "axios";
import {
  ApiRiceRoll,
  ApiRiceRollForImage,
} from "../sources/remote/api/ApiRiceRoll";
import mime from "mime";

export class UserRepositoryImpl implements UserRepository {

  async getDeliveryMen(): Promise<User[]> {
    try {
      const response = await ApiRiceRoll.get<User[]>('/users/findDeliveryMen');
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log("ERROR:" + JSON.stringify(e.response?.data));
      return Promise.resolve([]);
      
    }
  }

  async update(user: User): Promise<ResponseApiRice> {
    try {
      const response = await ApiRiceRoll.put<ResponseApiRice>(
        "/users/updateWithoutImage",
        user
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

  async updateWithImage(
    user: User,
    file: ImagePickerAsset
  ): Promise<ResponseApiRice> {
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

      data.append("user", JSON.stringify(user));
      const response = await ApiRiceRollForImage.put<ResponseApiRice>(
        "/users/update",
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
}
