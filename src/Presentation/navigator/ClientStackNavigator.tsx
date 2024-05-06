import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ClientCategoryListScreen } from "../../Components/Views/client/category/list/CategoryList";
import { ClientProductListScreen } from "../../Components/Views/client/product/list/ProductList";
import { ClientProductDetailScreen } from "../../Components/Views/client/product/detail/ProductDetail";
import { Product } from "../../Domain/entities/Product";
import { ShoppingBagProvider } from "../context/ShoppingBagContext";
import { TouchableOpacity, Image } from "react-native";
import { ClientShoppingBagScreen } from "../../Components/Views/client/shopping_bag/ShoppingBag";
import { ClientAddressListScreen } from "../../Components/Views/client/address/list/AddressList";
import { ClientAddressCreateScreen } from "../../Components/Views/client/address/create/AddressCreate";
import { ClientAddressMapScreen } from "../../Components/Views/client/address/map/AddressMap";

export type ClientStackParamList = {
  ClientCategoryListScreen: undefined;
  ClientProductListScreen: { id_category: string };
  ClientProductDetailScreen: { product: Product };
  ClientShoppingBagScreen: undefined;
  ClientAddressListScreen: undefined;
  ClientAddressCreateScreen: {refPoint: string, latitude: number, longitude: number} | undefined;
  ClientAddressMapScreen: undefined;
};

const Stack = createNativeStackNavigator<ClientStackParamList>();

export const ClientStackNavigator = () => {
  return (
    <ShoppingBagState>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="ClientCategoryListScreen"
          component={ClientCategoryListScreen}
          options={({ route, navigation }) => ({
            headerShown: true,
            title: "Categorías",
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("ClientShoppingBagScreen")}
              >
                <Image
                  source={require("../../../assets/cart.png")}
                  style={{ width: 33, height: 33 }}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="ClientProductListScreen"
          component={ClientProductListScreen}
          options={({ route, navigation }) => ({
            headerShown: true,
            title: "Productos",
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("ClientShoppingBagScreen")}
              >
                <Image
                  source={require("../../../assets/cart.png")}
                  style={{ width: 33, height: 33 }}
                />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="ClientProductDetailScreen"
          component={ClientProductDetailScreen}
        />

        <Stack.Screen
          name="ClientShoppingBagScreen"
          component={ClientShoppingBagScreen}
          options={{
            headerShown: true,
            title: "Mi Orden",
          }}
        />

        <Stack.Screen
          name="ClientAddressListScreen"
          component={ClientAddressListScreen}
          options={({ route, navigation }) => ({
            headerShown: true,
            title: "Mis Direcciones",
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("ClientAddressCreateScreen")}
              >
                <Image
                  source={require("../../../assets/add.png")}
                  style={{ width: 33, height: 33 }}
                />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="ClientAddressCreateScreen"
          component={ClientAddressCreateScreen}
          options={{
            headerShown: true,
            title: "Añadir Dirección",
          }}
        />

        <Stack.Screen
          name="ClientAddressMapScreen"
          component={ClientAddressMapScreen}
          options={{
            headerShown: true,
            title: "Ubica tu dirección en el mapa",
          }}
        />
      </Stack.Navigator>
    </ShoppingBagState>
  );
};

const ShoppingBagState = ({ children }: any) => {
  return <ShoppingBagProvider>{children}</ShoppingBagProvider>;
};
