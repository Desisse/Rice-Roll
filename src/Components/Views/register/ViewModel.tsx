import { useState } from "react";
import React from "react";
import { ApiRiceRoll } from "../../../Data/sources/remote/api/ApiRiceRoll";
import { RegisterAuthUseCase } from "../../../Domain/useCase/auth/RegisterAuth";
import * as ImagePicker from "expo-image-picker";
import { RegisterWithImageAuthUseCase } from "../../../Domain/useCase/auth/RegisterWithImageAuth";

const RegisterViewModel = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const [values, setValues] = useState({
    name: "",
    lastname: "",
    email: "",
    image: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [file, setFile] = useState<ImagePicker.ImagePickerAsset>();

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

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const register = async () => {
    if (isValidForm()) {
      //const response = await RegisterAuthUseCase(values);
      const response = await RegisterWithImageAuthUseCase(values, file!);
      console.log("RESULT: " + JSON.stringify(response));
    }
  };

  const isValidForm = (): boolean => {
    if (values.name === "") {
      setErrorMessage("El campo nombre no puede estar vacío.");
      return false;
    }
    if (values.lastname === "") {
      setErrorMessage("El campo apellido no puede estar vacío.");
      return false;
    }
    if (values.email === "") {
      setErrorMessage("Por favor, ingresa tu correo electrónico.");
      return false;
    }
    if (values.phone === "") {
      setErrorMessage("El campo teléfono no puede estar vacío.");
      return false;
    }
    if (values.password === "") {
      setErrorMessage("La contraseña no puede estar vacía.");
      return false;
    }
    if (values.confirmPassword === "") {
      setErrorMessage("Por favor, confirma tu contraseña.");
      return false;
    }
    if (values.password !== values.confirmPassword) {
      setErrorMessage("Las contraseñas no coinciden.");
      return false;
    }
    if (values.image === '') {
      setErrorMessage("Selecciona una imagen");
      return false;
    }

    return true;
  };

  return {
    ...values,
    onChange,
    register,
    pickImage,
    takePhoto,
    errorMessage,
  };
};

export default RegisterViewModel;
