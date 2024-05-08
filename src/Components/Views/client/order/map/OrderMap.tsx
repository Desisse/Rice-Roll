import React, { useEffect } from "react";
import {
  Image,
  Platform,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import styles from "./Styles";
import useViewModel from "./ViewModel";
import { RoundedButton } from "../../../../Components/RoundedButton";
import { StackScreenProps } from "@react-navigation/stack";
import { DeliveryOrderStackParamList } from "../../../../../Presentation/navigator/DeliveryOrderStackNavigator";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_APIKEY } from "../../../../../Presentation/constants/GoogleMapApiKey";
import { ClientOrderStackParamList } from "../../../../../Presentation/navigator/ClientOrderStackNavigator";

interface Props
  extends StackScreenProps<
    ClientOrderStackParamList,
    "ClientOrderMapScreen"
  > {}

export const ClientOrderMapScreen = ({ navigation, route }: Props) => {
  const { order } = route.params;
  const {
    messagePermissions,
    position,
    mapRef,
    origin,
    destination,
    responseMessage,
    stopForegroundUpdate,
    updateToDeliveredOrder
  } = useViewModel(order);

  useEffect(() => {
    if (messagePermissions !== "" && Platform.OS === "android") {
      ToastAndroid.show(messagePermissions, ToastAndroid.LONG);
    }
  }, [messagePermissions]);

  useEffect(() => {
    const unsuscribe = navigation.addListener("beforeRemove", () => {
      stopForegroundUpdate();
    });
    return unsuscribe;
  }, [navigation]);

  useEffect(() => {
    if (responseMessage !== "" && Platform.OS === "android") {
      ToastAndroid.show(responseMessage, ToastAndroid.LONG);
    }
  }, [responseMessage]);

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        zoomControlEnabled={true}
        style={{ height: "64%", width: "100%", position: "absolute", top: 0 }}
        provider={PROVIDER_GOOGLE}
      >
        {position !== undefined && (
          <Marker coordinate={position}>
            <Image
              style={styles.markerImage}
              source={require("../../../../../../assets/motorcycle.png")}
            />
          </Marker>
        )}
        {order.address !== undefined && (
          <Marker coordinate={{latitude: order.address.lat, longitude: order.address.lng}}>
            <Image
              style={styles.markerImage}
              source={require("../../../../../../assets/home.png")}
            />
          </Marker>
        )}

        {
          origin.latitude != 0.0 &&

          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="red"
          />

        }
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
          <RoundedButton text="Entregar Pedido" onPress={() => updateToDeliveredOrder()} />
        </View>
      </View>

      <TouchableOpacity
        style={styles.backContainer}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.imageBack}
          source={require("../../../../../../assets/back2.png")}
        />
      </TouchableOpacity>
    </View>
  );
};
