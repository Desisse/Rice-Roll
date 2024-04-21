import { ResponseApiRice } from "../../Data/sources/remote/models/ResponseApiRice";
import { User } from "../entities/User";
import * as ImagePicker from "expo-image-picker";

export interface AuthRepository {
    login(email: string, password: string): Promise<ResponseApiRice>
    register(user: User): Promise<ResponseApiRice>
    registerWithImage(user: User, file: ImagePicker.ImagePickerAsset): Promise<ResponseApiRice>

}