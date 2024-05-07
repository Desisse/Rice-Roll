import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { AdminOrderListScreen } from "../../Components/Views/admin/order/list/OrderList";
import { AdminOrderDetailScreen } from "../../Components/Views/admin/order/detail/OrderDetail";
import { Order } from "../../Domain/entities/Order";
import { OrderProvider } from "../context/OrderContext";
import { DeliveryOrderListScreen } from "../../Components/Views/delivery/order/list/OrderList";
import { DeliveryOrderDetailScreen } from "../../Components/Views/delivery/order/detail/OrderDetail";

export type DeliveryOrderStackParamList = {
    DeliveryOrderListScreen: undefined;
    DeliveryOrderDetailScreen: {order: Order}
};

const Stack = createNativeStackNavigator<DeliveryOrderStackParamList>();

export const DeliveryOrderStackNavigator = () => {
  return (
    <OrderStatus>
    <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="DeliveryOrderListScreen"
          component={DeliveryOrderListScreen}
        />

        <Stack.Screen
          name="DeliveryOrderDetailScreen"
          component={DeliveryOrderDetailScreen}
          options={{ headerShown: false, title: "Detalle de la Orden" }}
        />
      </Stack.Navigator>
    </OrderStatus>
  );
};

const OrderStatus = ({children}: any) => {
  return (
    <OrderProvider>
      {children}
    </OrderProvider>
  )
}

