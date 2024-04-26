import React, { useContext } from "react";
import { RemoveUserLocalUseCase } from "../../../../Domain/useCase/userLocal/RemoveUserLocal";
import { useUserLocal } from "../../../../Presentation/hooks/useUserLocal";
import { UserContext } from "../../../../Presentation/context/UserContext";

const ProfileInfoViewModel = () => {

  const { user, removeUserSession } = useContext(UserContext);

  return {
    removeUserSession,
    user
  };
};

export default ProfileInfoViewModel;
