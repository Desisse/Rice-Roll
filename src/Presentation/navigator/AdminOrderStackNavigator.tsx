import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { AdminOrderListScreen } from "../../Components/Views/admin/order/list/OrderList";
import { AdminOrderDetailScreen } from "../../Components/Views/admin/order/detail/OrderDetail";
import { Order } from "../../Domain/entities/Order";

export type AdminOrderStackParamList = {
    AdminOrderListScreen: undefined;
    AdminOrderDetailScreen: {order: Order}
};

const Stack = createNativeStackNavigator<AdminOrderStackParamList>();

export const AdminOrderStackNavigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="AdminOrderListScreen"
          component={AdminOrderListScreen}
        />

        <Stack.Screen
          name="AdminOrderDetailScreen"
          component={AdminOrderDetailScreen}
          options={{ headerShown: false, title: "Detalle de la Orden" }}
        />
      </Stack.Navigator>
  );
};

