import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Category } from "../../../../../Domain/entities/Category";
import { UpdateCategoryUseCase } from "../../../../../Domain/useCase/category/UpdateCategory";
import { UpdateWithImageCategoryUseCase } from "../../../../../Domain/useCase/category/UpdateWithImageCategory";
import { ResponseApiRice } from "../../../../../Data/sources/remote/models/ResponseApiRice";

const AdminCategoryUpdateViewModel = (category: Category) => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<ImagePicker.ImagePickerAsset>();
  const [responseMessage, setResponseMessage] = useState("");

  const [values, setValues] = useState(category);

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const updateCategory = async () => {
    setLoading(true);
    let response = {} as ResponseApiRice;
    if(values.image?.includes('https://')){
     response = await UpdateCategoryUseCase(values);
    }else {
       response = await UpdateWithImageCategoryUseCase(values, file!);
    }
    setLoading(false);
    setResponseMessage(response.message);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      onChange("image", result.assets[0].uri);
      setFile(result.assets[0]);
    }
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      onChange("image", result.assets[0].uri);
      setFile(result.assets[0]);
    }
  };


  return {
    ...values,
    loading,
    responseMessage,
    onChange,
    pickImage,
    takePhoto,
    updateCategory,
  };
};

export default AdminCategoryUpdateViewModel;
