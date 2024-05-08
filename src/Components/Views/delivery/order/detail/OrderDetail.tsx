import React, { useEffect } from "react";
import { Image, Platform, Text, ToastAndroid, View } from "react-native";
import styles from "./Styles";
import { FlatList } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { AdminOrderStackParamList } from "../../../../../Presentation/navigator/AdminOrderStackNavigator";
import { OrderDetailItem } from "./Item";
import { DateFormat } from "../../../../../Presentation/utils/DateFormat";
import useViewModel from "./ViewModel";
import { RoundedButton } from "../../../../Components/RoundedButton";
import DropDownPicker from "react-native-dropdown-picker";
import { DeliveryOrderStackParamList } from "../../../../../Presentation/navigator/DeliveryOrderStackNavigator";

interface Props
  extends StackScreenProps<
    DeliveryOrderStackParamList,
    "DeliveryOrderDetailScreen"
  > {}

export const DeliveryOrderDetailScreen = ({ navigation, route }: Props) => {
  const { order } = route.params;

  const {
    total,
    deliveryMen,
    open,
    value,
    items,
    responseMessage,
    getTotal,
    setOpen,
    setValue,
    setItems,
    updateToOnTheWayOrder,
  } = useViewModel(order);

  useEffect(() => {
    if (responseMessage !== "" && Platform.OS === "android") {
      ToastAndroid.show(responseMessage, ToastAndroid.LONG);
    }
  }, [responseMessage]);

  useEffect(() => {
    if (total == 0.0) {
      getTotal();
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.products}>
        <FlatList
          data={order.products}
          keyExtractor={(item) => item.id!}
          renderItem={({ item }) => <OrderDetailItem product={item} />}
        />
      </View>

      <View style={styles.info}>
        <View style={styles.infoRow}>
          <View style={styles.infoText}>
            <Text style={styles.dateOrder}> Fecha del Pedido</Text>
            <Text style={styles.date}>{DateFormat(order.timestamp!)}</Text>
          </View>
          <Image
            style={styles.imageOrder}
            source={require("../../../../../../assets/clock.png")}
          />
        </View>

        <View style={styles.infoRow}>
          <View style={styles.infoText}>
            <Text style={styles.dateOrder}> Cliente y Telefono</Text>
            <Text style={styles.date}>
              {order.client?.name} {order.client?.lastname} -{" "}
              {order.client?.phone}
            </Text>
          </View>
          <Image
            style={styles.imageOrder}
            source={require("../../../../../../assets/user.png")}
          />
        </View>

        <View style={styles.infoRow}>
          <View style={styles.infoText}>
            <Text style={styles.dateOrder}> Direccion de Entrega</Text>
            <Text style={styles.date}>
              {order.address?.address} - {order.address?.neighborhood}{" "}
            </Text>
          </View>
          <Image
            style={styles.imageOrder}
            source={require("../../../../../../assets/reference.png")}
          />
        </View>

          <View style={styles.infoRow}>
          <View style={styles.infoText}>
            <Text style={styles.dateOrder}> Repartidor Asignado</Text>
            <Text style={styles.date}>
              {order.delivery?.name} {order.delivery?.lastname}
            </Text>
          </View>
          <Image
            style={styles.imageOrder}
            source={require("../../../../../../assets/delivery.png")}
          />
        </View>
        

        <View style={styles.totalInfo}>
          <Text style={styles.total}>TOTAL: ${total} </Text>
          <View style={styles.button}>
            {order.status === "DESPACHADO" && (
              <RoundedButton
                text="Iniciar Entrega"
                onPress={() => updateToOnTheWayOrder()}
              />
            )}
            {order.status === "EN CAMINO" && (
              <RoundedButton
                text="Ir a la ruta"
                onPress={() => navigation.navigate('DeliveryOrderMapScreen', {order: order})}
              />
            )}
          </View>
        </View>
      </View>
    </View>
  );
};
