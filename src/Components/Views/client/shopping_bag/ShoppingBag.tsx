import React from "react";
import { FlatList, Text, View } from "react-native";
import useViewModel from "./ViewModel";
import { ShoppingBagItem } from "./Item";
import { RoundedButton } from "../../../Components/RoundedButton";
import styles from './Styles';
import { StackScreenProps } from "@react-navigation/stack";
import { ClientStackParamList } from "../../../../Presentation/navigator/ClientStackNavigator";

interface Props extends StackScreenProps<ClientStackParamList, 'ClientShoppingBagScreen'>{};

export const ClientShoppingBagScreen = ({navigation, route}: Props) => {
  const { shoppingBag, total, addItem, sustractItem, deleteItem } = useViewModel();
  return (
    <View style={styles.container}>
      <FlatList
        data={shoppingBag}
        keyExtractor={(item) => item.id!}
        renderItem={({ item }) => (
          <ShoppingBagItem
            product={item}
            addItem={addItem}
            sustractItem={sustractItem}
            deleteItem={ deleteItem}
          />
        )}
      />
      <View style={styles.totalToPay}>
        <View style={styles.totalInfo}>
          <Text style={styles.totalText}>Total:</Text>
          <Text style={styles.totalPrice}>${total}</Text>
        </View>
        <View style={styles.button}>
          <RoundedButton text="Confirmar Orden" onPress={() => navigation.navigate('ClientAddressListScreen')} />
        </View>
      </View>
    </View>
  );
};
