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
import { RoundedButton } from "../../../Components/RoundedButton";
import useViewModel from "./ViewModel";
import { CustomTextInput } from "../../../Components/CustomTextInput";
import styles from "./Styles";
import { ModalPickImage } from "../../../Components/ModalPickImage";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../../App";

interface Props
  extends StackScreenProps<RootStackParamList, "ProfileUpdateScreen"> {};

export const ProfileUpdateScreen = ({ navigation, route }: Props) => {
  const {
    name,
    lastname,
    image,
    phone,
    errorMessage,
    user,
    loading,
    onChange,
    onChangeInfoUpdate,
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

//Cambia la info del user
  useEffect(() => {
    if (user?.name && user?.lastname && user?.phone) {
      onChangeInfoUpdate(user.name, user.lastname, user.phone);
    }
  }, [user]);
  
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../../assets/fondo.jpg")}
        style={styles.imageBackground}
      />
      <View style={styles.userContainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          {image == "" ? (
            <Image
              source={{uri: user?.image}}
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
          <Text style={styles.formText}>ACTUALIZA TU PERFIL</Text>

          <CustomTextInput
            image={require("../../../../../assets/user.png")}
            placeholder="Nombre"
            value={name}
            keyboardType="default"
            property="name"
            onChangeText={onChange}
          />

          <CustomTextInput
            image={require("../../../../../assets/user.png")}
            placeholder="Apellido"
            value={lastname}
            keyboardType="default"
            property="lastname"
            onChangeText={onChange}
          />

          <CustomTextInput
            image={require("../../../../../assets/phone.png")}
            placeholder="Telefono"
            value={phone}
            keyboardType="numeric"
            property="phone"
            onChangeText={onChange}
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
