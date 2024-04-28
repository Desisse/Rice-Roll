import { ResponseApiRice } from "../../Data/sources/remote/models/ResponseApiRice";
import { Category } from "../entities/Category";
import * as ImagePicker from "expo-image-picker";

export interface CategoryRepository {

    create(category: Category, file: ImagePicker.ImagePickerAsset): Promise<ResponseApiRice>;
}