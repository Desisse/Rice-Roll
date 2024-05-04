import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import { Dimensions, View, Image, Text, TouchableOpacity } from "react-native";
import { ClientStackParamList } from "../../../../../Presentation/navigator/ClientStackNavigator";
import styles from "./Styles";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Carousel from "react-native-reanimated-carousel";
import useViewModel from "./ViewModel";
import { RoundedButton } from "../../../../Components/RoundedButton";

interface Props
  extends StackScreenProps<ClientStackParamList, "ClientProductDetailScreen"> {}

export const ClientProductDetailScreen = ({ navigation, route }: Props) => {
  const { product } = route.params;
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const { productImages, quantity, price, addItem, removeItem } =
    useViewModel(product);

  return (
    <View style={styles.container}>
      <GestureHandlerRootView>
        <Carousel
          loop={false}
          width={width}
          height={height}
          autoPlay={true}
          data={productImages}
          autoPlayInterval={1000}
          scrollAnimationDuration={4000}
          //onSnapToItem={(index) => console.log("current index:", index)}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={styles.productImage} />
          )}
        />
      </GestureHandlerRootView>

      <View style={styles.productDetail}>
        <View style={styles.productInfo}>
          <Text style={styles.productName}>{product.name}</Text>
          <View style={styles.divider}></View>

          <Text style={styles.productDescription}>Descripción: </Text>
          <Text style={styles.productContent}>{product.description}</Text>
          <View style={styles.divider}></View>

          <Text style={styles.productDescription}>Precio: </Text>
          <Text style={styles.productPrice}>$ {product.price}</Text>
          <View style={styles.divider}></View>
        </View>

        <View style={styles.productActions}>
          <TouchableOpacity
            onPress={() => removeItem()}
            style={styles.actionLess}
          >
            <Text style={styles.actionText}>-</Text>
          </TouchableOpacity>

          <View style={styles.quantity}>
            <Text style={styles.actionText}>{quantity}</Text>
          </View>

          <TouchableOpacity onPress={() => addItem()} style={styles.actionAdd}>
            <Text style={styles.actionText}>+</Text>
          </TouchableOpacity>

          <View style={styles.button}>
            <RoundedButton text="Agregar al carrito" onPress={() => {}} />
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.pop()} style={styles.back}>
        <Image
          style={styles.backImage}
          source={require("../../../../../../assets/back.png")}
        />
      </TouchableOpacity>
    </View>
  );
};
