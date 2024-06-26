import { User } from "../../Domain/entities/User";
import React, { Children, createContext, useEffect, useState } from "react";
import { SaveUserLocalUseCase } from "../../Domain/useCase/userLocal/SaveUserLocal";
import { GetUserLocalUseCase } from "../../Domain/useCase/userLocal/GetUserLocal";
import { RemoveUserLocalUseCase } from "../../Domain/useCase/userLocal/RemoveUserLocal";

export const userInitialState: User = {
  id: "",
  name: "",
  lastname: "",
  email: "",
  phone: "",
  image: "",
  password: "",
  confirmPassword: "",
  session_token: "",
  roles: [],
};

export interface UserContextProps {
  user: User;
  saveUserSession: (user: User) => Promise<void>;
  getUserSession: () => Promise<void>;
  removeUserSession: () => Promise<void>;
}

export const UserContext = createContext({} as UserContextProps);
export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState(userInitialState);

  useEffect(() => {
    getUserSession();
  }, []);

  //Metodo para almacenar el usuario en sesion
  const saveUserSession = async (user: User) => {
    await SaveUserLocalUseCase(user);
    setUser(user);
  };

  const getUserSession = async () => {
    const user = await GetUserLocalUseCase();
    setUser(user);
  };

  const removeUserSession = async () => {
    await RemoveUserLocalUseCase();
    setUser(userInitialState);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        saveUserSession,
        getUserSession,
        removeUserSession,
      }}
    >
        {children}
    </UserContext.Provider>
  );
};
