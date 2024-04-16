import { useState } from "react";
import React from "react";
import { ApiRiceRoll } from "../../../Data/sources/remote/api/ApiRiceRoll";
import { RegisterAuthUseCase } from "../../../Domain/useCase/auth/RegisterAuth";

const RegisterViewModel = () => {

  const [errorMessage, setErrorMessage] = useState("");

  const [values, setValues] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const register = async () => {
    if (isValidForm()) {
      const response = await RegisterAuthUseCase(values);
      console.log("RESULT: " + JSON.stringify(response));
    }
   
  };

  const isValidForm = (): boolean => {
    if(values.name === '') {
      setErrorMessage('El campo nombre no puede estar vacío.')
      return false;
    }
    if(values.lastname === '') {
      setErrorMessage('El campo apellido no puede estar vacío.')
      return false;
    }
    if(values.email === '') {
      setErrorMessage('Por favor, ingresa tu correo electrónico.')
      return false;
    }
    if(values.phone === '') {
      setErrorMessage('El campo teléfono no puede estar vacío.')
      return false;
    }
    if(values.password === '') {
      setErrorMessage('La contraseña no puede estar vacía.')
      return false;
    }
    if(values.confirmPassword === '') {
      setErrorMessage('Por favor, confirma tu contraseña.')
      return false;
    }
    if(values.password !== values.confirmPassword) {
      setErrorMessage('Las contraseñas no coinciden.')
      return false;
    }
    return true;
  };

  return {
    ...values,
    onChange,
    register,
    errorMessage
  };
};

export default RegisterViewModel;
