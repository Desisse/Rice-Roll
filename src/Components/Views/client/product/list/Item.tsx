import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Product } from "../../../../../Domain/entities/Product";
import { ProductStackParamList } from "../../../../../Presentation/navigator/AdminProductNavigator";
import { ClientStackParamList } from "../../../../../Presentation/navigator/ClientStackNavigator";


interface Props {
  product: Product;
  navigation: StackNavigationProp<ClientStackParamList, 'ClientProductListScreen', undefined>
}

export const ClientProductItem = ({ product, navigation }: Props) => {

  return (
    <TouchableOpacity 
    onPress={() => navigation.navigate('ClientProductDetailScreen', {product: product})}
    >
      <View style={styles.container}>
        <View style={styles.info}>
          <Text style={styles.title}> {product.name} </Text>
          <Text style={styles.description}> {product.description} </Text>
          <Text style={styles.price}> ${product.price} </Text>
        </View>
        <Image style={styles.image} source={{ uri: product.image1}} />

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
    paddingHorizontal: 20,
    marginTop: 10,
    paddingTop: 10,
    justifyContent: 'space-between'
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 15
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
