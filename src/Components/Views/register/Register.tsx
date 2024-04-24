import React, { useEffect, useState } from "react";
import {
  Image,
  Text,
  View,
  ScrollView,
  ToastAndroid,
  Platform,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
} from "react-native";
import { RoundedButton } from "../../Components/RoundedButton";
import useViewModel from "./ViewModel";
import { CustomTextInput } from "../../Components/CustomTextInput";
import styles from "./Styles";
import { ModalPickImage } from "../../Components/ModalPickImage";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../App";

interface Props
  extends StackScreenProps<RootStackParamList, "RegisterScreen"> {}

export const RegisterScreen = ({ navigation, route }: Props) => {
  const {
    name,
    lastname,
    email,
    image,
    phone,
    password,
    confirmPassword,
    errorMessage,
    user,
    loading,
    onChange,
    register,
    pickImage,
    takePhoto,
  } = useViewModel();

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (errorMessage !== "" && Platform.OS === "android") {
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  }, [errorMessage]);

  useEffect(() => {
    if (user?.id !== null && user?.id !== undefined) {
      navigation.replace("ProfileInfoScreen");
    }
  }, [user]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/sushi.jpg")}
        style={styles.imageBackground}
      />
      <View style={styles.userContainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          {image == "" ? (
            <Image
              source={require("../../../../assets/UserImage.png")}
              style={styles.userImage}
            />
          ) : (
            <Image source={{ uri: image }} style={styles.userImage} />
          )}
        </TouchableOpacity>

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

      <ModalPickImage
        openGallery={pickImage}
        openCamera={takePhoto}
        modalUseState={modalVisible}
        setModalUseState={setModalVisible}
      />

      {loading &&
        <ActivityIndicator
          style={styles.loading}
          size="large"
          color="#B91C1C"
        />
      }
    </View>
  );
};
