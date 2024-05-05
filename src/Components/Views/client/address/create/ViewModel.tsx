import React, { useContext, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { CreateCategoryUseCase } from "../../../../../Domain/useCase/category/CreateCategory";
import { CategoryContext } from "../../../../../Presentation/context/CategoryContext";

const ClientAddressCreateViewModel = () => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<ImagePicker.ImagePickerAsset>();
  const [responseMessage, setResponseMessage] = useState("");
  const { create } = useContext(CategoryContext);

  const [values, setValues] = useState({
    address: "",
    neighborhood: "",
    refPoint: "",
  });

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const createCategory = async () => {
    // setLoading(true);
    // const response = await create(values, file!);
    // setLoading(false);
    // setResponseMessage(response.message);
    // resetForm();
  };


  const resetForm = async () => {
    // setValues({
    //   name: "",
    //   description: "",
    //   image: "",
    // });
  };

  return {
    ...values,
    loading,
    responseMessage,
    onChange,
    createCategory,
  };
};

export default ClientAddressCreateViewModel;
