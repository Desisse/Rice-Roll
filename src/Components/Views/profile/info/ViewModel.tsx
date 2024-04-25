import React from "react";
import { RemoveUserLocalUseCase } from "../../../../Domain/useCase/userLocal/RemoveUserLocal";
import { useUserLocal } from "../../../../Presentation/hooks/useUserLocal";

const ProfileInfoViewModel = () => {

  const { user } = useUserLocal();

  const removeSession = async () => {
    await RemoveUserLocalUseCase();
  };

  return {
    removeSession,
    user
  };
};

export default ProfileInfoViewModel;
