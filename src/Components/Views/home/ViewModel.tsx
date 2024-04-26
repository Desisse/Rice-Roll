import React, { useContext, useEffect, useState } from "react";
import { LoginAuthUseCase } from "../../../Domain/useCase/auth/LoginAuth";
import { SaveUserLocalUseCase } from "../../../Domain/useCase/userLocal/SaveUserLocal";
import { GetUserLocalUseCase } from "../../../Domain/useCase/userLocal/GetUserLocal";
import { useUserLocal } from "../../../Presentation/hooks/useUserLocal";
import { UserContext } from "../../../Presentation/context/UserContext";

const HomeViewModel = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  //const { user, getUserSession } = useUserLocal();
  const { user, saveUserSession} = useContext( UserContext);
  console.log('USUARIO DE SESION: ' + JSON.stringify(user));
  

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const login = async () => {
    if (isValidForm()) {
      const response = await LoginAuthUseCase(values.email, values.password);
      console.log("RESPUESTA: " + JSON.stringify(response));
      if (!response.success) {
        setErrorMessage(response.message);
      } else {
        saveUserSession(response.data);
      }
    }
  }; 

  const isValidForm = (): boolean => {
    if (values.email === "") {
      setErrorMessage("Ingresa el correo electrónico");
      return false;
    }
    if (values.password === "") {
      setErrorMessage("Ingresa tu contraseña");
      return false;
    }
    return true;
  };

  return {
    ...values,
    user,
    onChange,
    login,
    errorMessage,
  };
};

export default HomeViewModel;
