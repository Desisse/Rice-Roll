import React, { useContext, useEffect, useRef, useState } from 'react';
//@ts-ignore
import stripe from 'react-native-stripe-client';
import { CreatePaymentStripeUseCase } from '../../../../../Domain/useCase/stripe/CreatePaymentStripe';
import { ShoppingBagContext } from '../../../../../Presentation/context/ShoppingBagContext';
import { UserContext } from '../../../../../Presentation/context/UserContext';


const ClientPaymentFormViewModel = () => {
  const creditCardRef = useRef() as any;
  const [values, setValues] = useState({
    brand: '',
    cvv: '',
    expiration: '',
    holder: '',
    number: '',

  })

  const stripeClient = stripe("pk_test_51PE3bSInS1vZxoNDViFqR5WwByn11jxA9hwZ5c52JfX5rweoK3AeYntlauOXP3FbuB53Rn7RvBqaDAXwPjsUwkrs00nSjI1lza");

  const {total, shoppingBag} = useContext(ShoppingBagContext); 
  const { user} = useContext(UserContext);


  useEffect(() => {
    console.log('VALUES FORM: ' +JSON.stringify(values,null,3));
    if(values.number !== '' && values.expiration !== '' && values.cvv !== ''){
      createTokenPayment();
    }else{
      console.log('DATOS INCORRECTOS');
      
    }
  }, [values])

  const createTokenPayment = async() => {
    const response = await stripeClient.createPaymentMethod("card", {
      number: values.number.replace(/\s/g,''),
      exp_month: parseInt(values.expiration.split('/')[0]),
      exp_year: parseInt(values.expiration.split('/')[1]),
      cvc: values.cvv
    });

    console.log('RESPUESTA STRIPE: ' + JSON.stringify(response, null, 3));

    if(response.id !== undefined &&  response.id !== null) {
      const result = await CreatePaymentStripeUseCase(response.id, total, {
        id_client: user.id!,
        id_address: user.address?.id!,
        products: shoppingBag

      })

      console.log('RESPONSE: ' + JSON.stringify(result, null, 3));
      
    }
    
  }
  

  const handleSubmit = React.useCallback(() => {
    if (creditCardRef.current) {
      const { error, data } = creditCardRef.current.submit();
      if(error === null) {
        setValues(data);
      }
      console.log('ERROR: ', error);
      console.log('CARD DATA: ', data);
    }
  }, []);

  return {
    creditCardRef,
    handleSubmit

  }
}

export default ClientPaymentFormViewModel;
