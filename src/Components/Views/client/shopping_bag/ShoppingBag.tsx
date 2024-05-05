import React from "react";
import { FlatList, Text, View } from "react-native";
import useViewModel from "./ViewModel";
import { ShoppingBagItem } from "./Item";
import { RoundedButton } from "../../../Components/RoundedButton";
import styles from './Styles';

export const ClientShoppingBagScreen = () => {
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
          <RoundedButton text="Confirmar Orden" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};
