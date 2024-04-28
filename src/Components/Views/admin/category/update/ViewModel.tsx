import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { CreateCategoryUseCase } from "../../../../../Domain/useCase/category/CreateCategory";
import { Category } from "../../../../../Domain/entities/Category";

const AdminCategoryUpdateViewModel = (category: Category) => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<ImagePicker.ImagePickerAsset>();
  const [responseMessage, setResponseMessage] = useState("");

  const [values, setValues] = useState(category);

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const createCategory = async () => {
    setLoading(true);
    const response = await CreateCategoryUseCase(values, file!);
    setLoading(false);
    setResponseMessage(response.message);
    resetForm();
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

  const resetForm = async () => {
    setValues({
      name: "",
      description: "",
      image: "",
    });
  };

  return {
    ...values,
    loading,
    responseMessage,
    onChange,
    pickImage,
    takePhoto,
    createCategory,
  };
};

export default AdminCategoryUpdateViewModel;
