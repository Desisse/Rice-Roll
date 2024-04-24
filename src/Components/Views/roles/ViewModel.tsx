import React from 'react'
import { useUserLocal } from '../../../Presentation/hooks/useUserLocal';

const RolesViewModel = () => {

const {user} = useUserLocal();

  return {
    user
    
  }
}

export default RolesViewModel;
