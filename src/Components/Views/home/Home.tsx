import React, { useEffect, useState } from "react";
import {
  Image,
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  ToastAndroid,
} from "react-native";
import { RoundedButton } from "../../Components/RoundedButton";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../App";
import useViewModel from "./ViewModel";
import { CustomTextInput } from "../../Components/CustomTextInput";
import styles from "./Styles";

interface Props extends StackScreenProps<RootStackParamList, "HomeScreen"> {}

export const HomeScreen = ({ navigation, route }: Props) => {
  const { email, password, errorMessage, onChange, login, user } =
    useViewModel();

  useEffect(() => {
    if (errorMessage !== "" && Platform.OS === "android") {
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  }, [errorMessage]);

  useEffect(() => {
    if (user?.id !== null && user?.id !== undefined) {
      if (user.roles?.length! > 1) {
        navigation.replace("RolesScreen");
      } else {
        navigation.replace("ProfileInfoScreen");
      }
    }
  }, [user]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/sushi.jpg")}
        style={styles.imageBackground}
      />
      <View style={styles.form}>
        <Text style={styles.formText}>INICIAR SESIÓN</Text>

        <CustomTextInput
          image={require("../../../../assets/email.png")}
          placeholder="Email"
          value={email}
          keyboardType="email-address"
          property="email"
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

        <View style={{ marginTop: 30 }}>
          <RoundedButton text="INGRESAR" onPress={() => login()} />
        </View>

        <View style={styles.formRegister}>
          <Text> No tienes cuenta? </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            <Text style={styles.formRegisterText}> Registrate </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
