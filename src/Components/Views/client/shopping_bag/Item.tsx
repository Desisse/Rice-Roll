import React from "react";
import { Product } from "../../../../Domain/entities/Product";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

interface Props {
  product: Product;
  addItem: (product: Product) => void;
  sustractItem: (product: Product) => void;
  deleteItem: (product: Product) => void;
}

export const ShoppingBagItem = ({
  product,
  addItem,
  sustractItem,
  deleteItem,
}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: product.image1 }} />
      </View>

      <View style={styles.productInfo}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.nameProduct}>{product.name}</Text>
          <Text style={styles.price}>
            {" "}
            ${product.quantity! * product.price}
          </Text>
        </View>

        <View style={styles.actions}>
          <View style={styles.productActions}>
            <TouchableOpacity
              onPress={() => sustractItem(product)}
              style={styles.actionLess}
            >
              <Text style={styles.actionText}>-</Text>
            </TouchableOpacity>

            <View style={styles.quantity}>
              <Text style={styles.actionText}>{product.quantity}</Text>
            </View>

            <TouchableOpacity
              onPress={() => addItem(product)}
              style={styles.actionAdd}
            >
              <Text style={styles.actionText}>+</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => deleteItem(product)}>
            <Image 
            style={styles.deleteItem}
            source={require('../../../../../assets/delete.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 70,
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 7,
  },
  imageContainer: {},
  image: {
    width: 70,
    height: 70,
    borderRadius: 15,
  },
  nameProduct: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    flex: 1,
  },
  price: {
    color: "red",
    fontSize: 16,
    fontWeight: "500",
    marginRight: 40,
  },
  productInfo: {
    flex: 1,
  },
  actionText: {
    color: "white",
    fontSize: 15,
  },
  actionLess: {
    backgroundColor: "#3a3a3a",
    paddingVertical: 8,
    paddingHorizontal: 10,
    alignSelf: "center",
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    bottom: 43,
  },
  quantity: {
    backgroundColor: "#3a3a3a",
    paddingVertical: 8,
    paddingHorizontal: 15,
    alignSelf: "center",
    bottom: 43,
  },
  actionAdd: {
    backgroundColor: "#3a3a3a",
    paddingVertical: 8,
    paddingHorizontal: 10,
    alignSelf: "center",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    bottom: 43,
  },
  actions: {
    flexDirection: "row",
    marginLeft: 14,
    marginTop: 5,
    marginRight: 40,
    top: 50
  },
  productActions: {
    flexDirection: "row",
    flex: 1
  },
  deleteItem: {
    width: 25,
    height: 25,
    bottom: 43
  }
});
