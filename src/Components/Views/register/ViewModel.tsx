import { useState } from "react";
import React from "react";
import { ApiRiceRoll } from "../../../Data/sources/remote/api/ApiRiceRoll";
import { RegisterAuthUseCase } from "../../../Domain/useCase/auth/RegisterAuth";


const RegisterViewModel = () => {
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
    const { result, error } = await RegisterAuthUseCase(values);
    console.log('RESULT: ' + JSON.stringify(result));
    console.log('ERROR: ' + error);
  };

  return {
    ...values,
    onChange,
    register,
  };
};

export default RegisterViewModel;
