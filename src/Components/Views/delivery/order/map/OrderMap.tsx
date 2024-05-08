import React, { useEffect } from "react";
import { Image, Platform, Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import styles from "./Styles";
import useViewModel from "./ViewModel";
import { RoundedButton } from "../../../../Components/RoundedButton";
import { StackScreenProps } from "@react-navigation/stack";
import { DeliveryOrderStackParamList } from "../../../../../Presentation/navigator/DeliveryOrderStackNavigator";

interface Props
  extends StackScreenProps<
    DeliveryOrderStackParamList,
    "DeliveryOrderMapScreen"
  > {}

export const DeliveryOrderMapScreen = ({ navigation, route }: Props) => {
  const { order } = route.params;
  const {
    messagePermissions,
    position,
    mapRef,
    name,
    latitude,
    longitude,
    onRegionChangeComplete,
    stopForegroundUpdate
  } = useViewModel();

  useEffect(() => {
    if (messagePermissions !== "" && Platform.OS === "android") {
      ToastAndroid.show(messagePermissions, ToastAndroid.LONG);
    }
  }, [messagePermissions]);

  useEffect(() => {
    const unsuscribe = navigation.addListener('beforeRemove', () => {
      stopForegroundUpdate();
    })
    return unsuscribe;
  }, [navigation])
  

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={{ height: "64%", width: "100%", position: "absolute", top: 0 }}
        provider={PROVIDER_GOOGLE}
      >
        {position !== undefined && (
          <Marker
            coordinate={position}
          >
            <Image
            style={styles.markerImage}
            source={require("../../../../../../assets/motorcycle.png")}
          />

          </Marker>
        )}
      </MapView>

      <View style={styles.info}>
        <View style={styles.infoRow}>
          <View style={styles.infoText}>
            <Text style={styles.dateOrder}> Fraccionamiento</Text>
            <Text style={styles.date}>{order.address?.neighborhood} </Text>
          </View>
          <Image
            style={styles.imageOrder}
            source={require("../../../../../../assets/reference.png")}
          />
        </View>

        <View style={styles.infoRow}>
          <View style={styles.infoText}>
            <Text style={styles.dateOrder}> Calle</Text>
            <Text style={styles.date}>{order.address?.address} </Text>
          </View>
          <Image
            style={styles.imageOrder}
            source={require("../../../../../../assets/home.png")}
          />
        </View>

        <View style={styles.divider}></View>

        <View style={styles.infoClient}>
          <Image
            style={styles.imageUser}
            source={{ uri: order.client?.image }}
          />
          <Text style={styles.nameClient}>
            {order.client?.name} {order.client?.lastname}
          </Text>
          <Image
            style={styles.imagePhone}
            source={require("../../../../../../assets/phone.png")}
          />
        </View>

        <View style={styles.buttonRefPoint}>
          <RoundedButton text="Entregar Pedido" onPress={() => {}} />
        </View>
      </View>

      <TouchableOpacity style={styles.backContainer} onPress={() => navigation.goBack()}>

        <Image 
        style={styles.imageBack}
        source={require('../../../../../../assets/back2.png')}
        />
      </TouchableOpacity>
    </View>
  );
};
