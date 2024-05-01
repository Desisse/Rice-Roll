import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { CategoryStackParamList } from "../../../../../Presentation/navigator/AdminCategoryNavigator";
import { Product } from "../../../../../Domain/entities/Product";


interface Props {
  product: Product;
  remove: (product: Product) => void;
}

export const AdminProductListItem = ({ product, remove }: Props) => {

  const navigation = useNavigation<StackNavigationProp<CategoryStackParamList>>();
  return (
    <TouchableOpacity 
    // onPress={() => navigation.navigate('AdminProductNavigator', {category: category})}
    >
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: product.image1}} />

        <View style={styles.info}>
          <Text style={styles.title}> {product.name} </Text>
          <Text style={styles.description}> {product.description} </Text>
          <Text style={styles.price}> ${product.price} </Text>

        </View>

        <View style={styles.actionContainer}>
          <TouchableOpacity 
          // onPress={() => navigation.navigate('AdminCategoryUpdateScreen', {category: category})}
          >
            <Image
              style={styles.actionImage}
              source={require("../../../../../../assets/edit.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => remove(product)}>
            <Image
              style={styles.actionImage}
              source={require("../../../../../../assets/delete.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.divider}></View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    height: 90,
    marginHorizontal: 20,
    marginTop: 10,
    paddingTop: 10
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 15,
  },
  info: {
    marginLeft: 15,
    flex: 1,
  },
  title: {
    color: "black",
    fontSize: 18,
    fontWeight: "600",
  },
  description: {
    color: "gray",
    fontSize: 14,
    marginTop: 3,
  },
  actionImage: {
    width: 25,
    height: 25,
    marginVertical: 2,
  },
  actionContainer: {
    marginRight: 40,
  },
  divider: {
    height: 1,
    backgroundColor: "#DDDDDD",
    flex: 1,
    marginHorizontal: 10
  },
  price: {
    fontSize: 13,
    color: '#C40C0C',
    fontWeight: 'bold'
  }
});
