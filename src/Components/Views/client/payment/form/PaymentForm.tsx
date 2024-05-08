import React from 'react'
import { KeyboardAvoidingView, Platform, Text, View } from 'react-native'
import styles from './Styles';
import useViewModel from './ViewModel';
import CreditCard from 'react-native-credit-card-form-ui';
import { RoundedButton } from '../../../../Components/RoundedButton';

export const ClientPaymentFormScreen = () => {
  const { creditCardRef, handleSubmit } = useViewModel();


  return (
    <View style={styles.container}>
      <View style={styles.card}>
    <CreditCard ref={creditCardRef} 
    background={'#7D0A0A'}
    labels={{
      holder: 'Titular',
      cvv: 'Codigo de seguridad',
      expiration: 'Expiracion'
    }}
    placeholders={{
      number: '0000 0000 0000 0000',
      cvv: 'xxx',
      expiration: 'MM/YYYY',
      holder: 'NOMBRE DEL TITULAR'
    }}
    placeholderTextColor='#EEE2DE'
    />
      </View>

    <View style={styles.button}>
      <RoundedButton 
      text='Continuar'
      onPress={() => handleSubmit()}
      />
    </View>
    </View>
  )
}
