import React, { useContext, useEffect, useState } from 'react'
import { GetByUserAddressUseCase } from '../../../../../Domain/useCase/address/GetByUserAddress';
import { Address } from '../../../../../Domain/entities/Address';
import { UserContext } from '../../../../../Presentation/context/UserContext';

 const ClientAddressListViewModel = () => {
    const [address, setAddress] = useState<Address[]>([]);
    const { user, saveUserSession, getUserSession } = useContext(UserContext);
    const [checked, setChecked] = useState('');

    
    useEffect(() => {
      getAddress();
      if(user.address != null && user.address !== undefined) {
        changeRadioValue(user.address!)
        console.log('USUARIO CON DIRECCION: ' + JSON.stringify(user));
      }
    }, [user])
    

    const changeRadioValue = (address: Address) => {
      setChecked(address.id!);
      user.address = address;
      saveUserSession(user);
    }

    const getAddress = async() => {
        const result = await GetByUserAddressUseCase(user.id!);
        setAddress(result);
    }

  return {
    address,
    checked,
    getAddress,
    changeRadioValue
  }
}

export default ClientAddressListViewModel;
