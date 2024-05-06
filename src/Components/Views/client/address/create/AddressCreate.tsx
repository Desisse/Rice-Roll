import React, { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  ToastAndroid,
  Platform,
} from "react-native";
import styles from "./Styles";
import { CustomTextInput } from "../../../../Components/CustomTextInput";
import useViewModel from "./ViewModel";
import { RoundedButton } from "../../../../Components/RoundedButton";
import { ModalPickImage } from "../../../../Components/ModalPickImage";
import { StackScreenProps } from "@react-navigation/stack";
import { ClientStackParamList } from "../../../../../Presentation/navigator/ClientStackNavigator";

interface Props extends StackScreenProps<ClientStackParamList, 'ClientAddressCreateScreen'>{};

export const ClientAddressCreateScreen = ({navigation, route}: Props) => {
  const {
    address,
    neighborhood,
    refPoint,
    loading,
    responseMessage,
    onChange,
    createAddress,
    onChangeRefPoint
  } = useViewModel();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if(route.params?.refPoint){
      onChangeRefPoint(route.params?.refPoint, route.params.latitude, route.params?.longitude);
    }
    }, [route.params?.refPoint])
  

  useEffect(() => {
    if (responseMessage !== "" && Platform.OS === "android") {
      ToastAndroid.show(responseMessage, ToastAndroid.LONG);
    }
  }, [responseMessage]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.imageContainer}
      >
        <Image
          style={styles.image}
          source={require("../../../../../../assets/mapa.png")}
        />
      </TouchableOpacity>
      <View style={styles.form}>
        <CustomTextInput
          placeholder="Nombre de la Calle"
          image={require("../../../../../../assets/street.png")}
          keyboardType="default"
          property="address"
          value={address}
          onChangeText={onChange}
        />

        <CustomTextInput
          placeholder="Fraccionamiento"
          image={require("../../../../../../assets/neighborhood.png")}
          keyboardType="default"
          property="neighborhood"
          value={neighborhood}
          onChangeText={onChange}
        />

        <TouchableOpacity onPress={() => navigation.navigate('ClientAddressMapScreen') }>
        <CustomTextInput
          placeholder="Punto de Referencia"
          image={require("../../../../../../assets/reference.png")}
          keyboardType="default"
          property="refPoint"
          value={refPoint}
          onChangeText={onChange}
          editable={false}
        />
        </TouchableOpacity>

      </View>

      <View style={styles.buttonContainer}>
        <RoundedButton
          text="Agregar nueva dirección"
          onPress={() => createAddress()}
        />
      </View>

      {loading && (
        <ActivityIndicator
          style={styles.loading}
          size="large"
          color="#B91C1C"
        />
      )}
    </View>
  );
};
