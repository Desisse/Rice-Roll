import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Order } from "../../Domain/entities/Order";
import { OrderProvider } from "../context/OrderContext";
import { ClientOrderListScreen } from "../../Components/Views/client/order/list/OrderList";
import { ClientOrderDetailScreen } from "../../Components/Views/client/order/detail/OrderDetail";
import { ClientOrderMapScreen } from "../../Components/Views/client/order/map/OrderMap";

export type ClientOrderStackParamList = {
  ClientOrderListScreen: undefined;
  ClientOrderDetailScreen: { order: Order };
  ClientOrderMapScreen: { order: Order };
};

const Stack = createNativeStackNavigator<ClientOrderStackParamList>();

export const ClientOrderStackNavigator = () => {
  return (
    <OrderStatus>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="ClientOrderListScreen"
          component={ClientOrderListScreen}
        />

        <Stack.Screen
          name="ClientOrderDetailScreen"
          component={ClientOrderDetailScreen}
          options={{ headerShown: false, title: "Detalle de la Orden" }}
        />

        <Stack.Screen
          name="ClientOrderMapScreen"
          component={ClientOrderMapScreen}
        />
      </Stack.Navigator>
    </OrderStatus>
  );
};

const OrderStatus = ({ children }: any) => {
  return <OrderProvider>{children}</OrderProvider>;
};
