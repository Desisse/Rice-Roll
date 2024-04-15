import { useState } from "react";
import React from "react";
import { ApiRiceRoll } from "../../../Data/sources/remote/api/ApiRiceRoll";

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
    try {
      const response = await ApiRiceRoll.post('/users/create', values);
      console.log('Response: ' + JSON.stringify(response));
    } catch (error) {
      console.log('ERROR: ' + error );
      
      
    }
  };

  return {
    ...values,
    onChange,
    register,
  };
};

export default RegisterViewModel;
