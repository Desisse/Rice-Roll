import React, { useEffect, useRef, useState } from 'react';
//@ts-ignore
import stripe from 'react-native-stripe-client';



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
