import { ResponseApiRice } from "../../Data/sources/remote/models/ResponseApiRice";
import { User } from "../entities/User";
import * as ImagePicker from "expo-image-picker";

export interface UserRepository {
  update(user: User): Promise<ResponseApiRice>;
  updateWithImage(
    user: User,
    file: ImagePicker.ImagePickerAsset
  ): Promise<ResponseApiRice>;
}
