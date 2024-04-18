import React, { useEffect } from "react";
import { Image, Text, View, ScrollView, ToastAndroid, Platform } from "react-native";
import { RoundedButton } from "../../Components/RoundedButton";
import useViewModel from "./ViewModel";
import { CustomTextInput } from "../../Components/CustomTextInput";
import styles from "./Styles";

export const RegisterScreen = () => {
  const {
    name,
    lastname,
    email,
    phone,
    password,
    confirmPassword,
    errorMessage,
    onChange,
    register
  } = useViewModel();

  useEffect(() => {
    if (errorMessage !== '' && Platform.OS === 'android') {
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  }, [errorMessage]);
  

/* useEffect(() => {
  //ToastAndroid.show(errorMessage, ToastAndroid.LONG);
 }, [errorMessage]) */
 

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/sushi.jpg")}
        style={styles.imageBackground}
      />
      <View style={styles.userContainer}>
        <Image
          source={require("../../../../assets/UserImage.png")}
          style={styles.userImage}
        />
        <Text style={styles.userText}> Selecciona una imagen </Text>
      </View>

      <View style={styles.form}>
        <ScrollView>
          <Text style={styles.formText}>REGISTRARSE</Text>

          <CustomTextInput
            image={require("../../../../assets/user.png")}
            placeholder="Nombre"
            value={name}
            keyboardType="default"
            property="name"
            onChangeText={onChange}
          />

          <CustomTextInput
            image={require("../../../../assets/user.png")}
            placeholder="Apellido"
            value={lastname}
            keyboardType="default"
            property="lastname"
            onChangeText={onChange}
          />

          <CustomTextInput
            image={require("../../../../assets/email.png")}
            placeholder="Email"
            value={email}
            keyboardType="email-address"
            property="email"
            onChangeText={onChange}
          />

          <CustomTextInput
            image={require("../../../../assets/phone.png")}
            placeholder="Telefono"
            value={phone}
            keyboardType="numeric"
            property="phone"
            onChangeText={onChange}
          />

          <CustomTextInput
            image={require("../../../../assets/password.png")}
            placeholder="Contraseña"
            value={password}
            keyboardType="default"
            property="password"
            onChangeText={onChange}
            secureTextEntry={true}
          />

          <CustomTextInput
            image={require("../../../../assets/password.png")}
            placeholder="Confirmar Contraseña"
            value={confirmPassword}
            keyboardType="default"
            property="confirmPassword"
            onChangeText={onChange}
            secureTextEntry={true}
          />

          <View style={{ marginTop: 30 }}>
            <RoundedButton text="CONFIRMAR" onPress={() => register()} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
