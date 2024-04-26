import { useContext, useState } from "react";
import React from "react";
import { ApiRiceRoll } from "../../../../Data/sources/remote/api/ApiRiceRoll";
import * as ImagePicker from "expo-image-picker";
import { SaveUserLocalUseCase } from "../../../../Domain/useCase/userLocal/SaveUserLocal";
import { useUserLocal } from "../../../../Presentation/hooks/useUserLocal";
import { UpdateUserUseCase } from "../../../../Domain/useCase/user/UpdateUser";
import { UpdateWithImageUserUseCase } from "../../../../Domain/useCase/user/UpdateWithImageUser";
import { User } from "../../../../Domain/entities/User";
import { ResponseApiRice } from "../../../../Data/sources/remote/models/ResponseApiRice";
import { UserContext } from "../../../../Presentation/context/UserContext";

const ProfileUpdateViewModel = (user: User) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [values, setValues] = useState(user);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<ImagePicker.ImagePickerAsset>();
  const { getUserSession } = useUserLocal();
  const { saveUserSession } = useContext(UserContext);

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

  const onChangeInfoUpdate = (name: string, lastname: string, phone: string) => {
    setValues({ ...values, name, lastname, phone});
  };

  const update = async () => {
    if (isValidForm()) {
      setLoading(true);

      let response = {} as ResponseApiRice;

      if(values.image?.includes('https://')){
         response = await UpdateUserUseCase(values);
      }else {
         response = await UpdateWithImageUserUseCase(values, file!);
      }
      
      setLoading(false);
      console.log("RESULT: " + JSON.stringify(response));
      if(response.success) {
        saveUserSession(response.data);
        setSuccessMessage(response.message);
      }
      else{
        setErrorMessage(response.message);
      }
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
    if (values.phone === "") {
      setErrorMessage("El campo teléfono no puede estar vacío.");
      return false;
    }



    return true;
  };

  return {
    ...values,
    onChange,
    update,
    pickImage,
    takePhoto,
    onChangeInfoUpdate,
    errorMessage,
    user,
    loading,
    successMessage
  };
};

export default ProfileUpdateViewModel;
