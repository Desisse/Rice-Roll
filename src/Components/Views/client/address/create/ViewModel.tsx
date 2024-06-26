import React, { useContext, useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { CategoryContext } from "../../../../../Presentation/context/CategoryContext";
import { CreateAddressUseCase } from "../../../../../Domain/useCase/address/CreateAddress";
import { UserContext } from "../../../../../Presentation/context/UserContext";

const ClientAddressCreateViewModel = () => {
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const { user, saveUserSession, getUserSession } = useContext(UserContext);

  const [values, setValues] = useState({
    address: "",
    neighborhood: "",
    refPoint: "",
    lat: 0.0,
    lng: 0.0,
    id_user: "",
  });

  useEffect(() => {
    if (user.id != "") {
      onChange("id_user", user.id);
    }
  }, [user]);

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const onChangeRefPoint = (refPoint: string, lat: number, lng: number) => {
    setValues({ ...values, refPoint: refPoint, lat: lat, lng: lng });
  };

  const createAddress = async () => {
    setLoading(true);
    const response = await CreateAddressUseCase(values);
    setLoading(false);
    setResponseMessage(response.message);
    if(response.success) {
      resetForm();
      user.address = values;
      user.address.id = response.data;
      await saveUserSession(user);
      getUserSession();
    }
  };

  const resetForm = async () => {
    setValues({
      address: "",
      neighborhood: "",
      refPoint: "",
      lat: 0.0,
      lng: 0.0,
      id_user: user.id!,
    });
  };

  return {
    ...values,
    loading,
    responseMessage,
    onChange,
    createAddress,
    onChangeRefPoint
  };
};

export default ClientAddressCreateViewModel;
