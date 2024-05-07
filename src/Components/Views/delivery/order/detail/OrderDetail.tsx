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
    getDeliveryMen,
    setOpen,
    setValue,
    setItems,
    dispatchOrder,
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
    getDeliveryMen();
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

        {order.status === "PAGADO" ? (
          <View>
            <Text style={styles.delivery}>ASIGNAR REPARTIDOR</Text>
            <View style={styles.dropDown}>
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
              />
            </View>
          </View>
        ) : (
          <Text style={styles.delivery}>
            REPARTIDOR ASIGNADO: {order.delivery?.name} {order.delivery?.lastname}
          </Text>
        )}

        <View style={styles.totalInfo}>
          <Text style={styles.total}>TOTAL: ${total} </Text>
          <View style={styles.button}>
            {order.status === "PAGADO" && (
              <RoundedButton
                text="Terminar Orden"
                onPress={() => dispatchOrder()}
              />
            )}
          </View>
        </View>
      </View>
    </View>
  );
};
