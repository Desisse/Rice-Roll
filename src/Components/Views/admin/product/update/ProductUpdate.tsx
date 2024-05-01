import React, { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  ToastAndroid,
  Platform,
  Text,
  ScrollView,
} from "react-native";
import styles from "./Styles";
import { CustomTextInput } from "../../../../Components/CustomTextInput";
import useViewModel from "./ViewModel";
import { RoundedButton } from "../../../../Components/RoundedButton";
import { ModalPickImage } from "../../../../Components/ModalPickImage";
import { StackScreenProps } from "@react-navigation/stack";
import { ProductStackParamList } from "../../../../../Presentation/navigator/AdminProductNavigator";
import { ModalPickMultipleImage } from "../../../../Components/ModalPickMultipleImage";

interface Props
  extends StackScreenProps<ProductStackParamList, "AdminProductUpdateScreen"> {}

export const AdminProductUpdateScreen = ({ navigation, route }: Props) => {
  const { category, product } = route.params;
  const {
    name,
    description,
    loading,
    image1,
    image2,
    image3,
    price,
    responseMessage,
    onChange,
    pickImage,
    takePhoto,
    updateProduct,
  } = useViewModel(product,category);
  const [modalVisible, setModalVisible] = useState(false);
  const [numberImage, setNumberImage] = useState(1);

  useEffect(() => {
    if (responseMessage !== "" && Platform.OS === "android") {
      ToastAndroid.show(responseMessage, ToastAndroid.LONG);
    }
  }, [responseMessage]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <TouchableOpacity
          onPress={() => {
            setNumberImage(1);
            setModalVisible(true);
          }}
        >
          {image1 == "" ? (
            <Image
              style={styles.image}
              source={require("../../../../../../assets/addImage.png")}
            />
          ) : (
            <Image source={{ uri: image1 }} style={styles.image} />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setNumberImage(2);
            setModalVisible(true);
          }}
        >
          {image2 == "" ? (
            <Image
              style={styles.image}
              source={require("../../../../../../assets/addImage.png")}
            />
          ) : (
            <Image source={{ uri: image2 }} style={styles.image} />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setNumberImage(3);
            setModalVisible(true);
          }}
        >
          {image3 == "" ? (
            <Image
              style={styles.image}
              source={require("../../../../../../assets/addImage.png")}
            />
          ) : (
            <Image source={{ uri: image3 }} style={styles.image} />
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.form}>
        <ScrollView>
          <View style={styles.categoryInfo}>
            <Image
              style={styles.imageCategory}
              source={require("../../../../../../assets/menu.png")}
            />
            <Text style={styles.textCategory}>Categoria:</Text>
            <Text style={styles.nameCategory}>{category.name}</Text>
          </View>

          <CustomTextInput
            placeholder="Nombre del Producto"
            image={require("../../../../../../assets/create.png")}
            keyboardType="default"
            property="name"
            value={name}
            onChangeText={onChange}
          />

          <CustomTextInput
            placeholder="Descripción"
            image={require("../../../../../../assets/description.png")}
            keyboardType="default"
            property="description"
            value={description}
            onChangeText={onChange}
          />

          <CustomTextInput
            placeholder="Precio"
            image={require("../../../../../../assets/price.png")}
            keyboardType="numeric"
            property="price"
            value={price.toString()}
            onChangeText={onChange}
          />

          <View style={styles.buttonContainer}>
            <RoundedButton
              text="Editar Producto"
              onPress={() => updateProduct()}
            />
          </View>
        </ScrollView>
      </View>

      <ModalPickMultipleImage
        openGallery={pickImage}
        openCamera={takePhoto}
        modalUseState={modalVisible}
        setModalUseState={setModalVisible}
        numberImage={numberImage}
      />

      {loading && (
        <ActivityIndicator
          style={styles.loading}
          size="large"
          color="#B91C1C"
        />
      )}
    </View>
  );
};
