import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Image, ActivityIndicator, ToastAndroid, Platform } from "react-native";
import styles from "./Styles";
import { CustomTextInput } from "../../../../Components/CustomTextInput";
import useViewModel from "./ViewModel";
import { RoundedButton } from "../../../../Components/RoundedButton";
import { ModalPickImage } from "../../../../Components/ModalPickImage";

export const AdminCategoryCreateScreen = () => {
  const {
    name,
    description,
    loading,
    image,
    responseMessage,
    onChange,
    pickImage,
    takePhoto,
    createCategory
  } = useViewModel();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (responseMessage !== "" && Platform.OS === "android") {
      ToastAndroid.show(responseMessage, ToastAndroid.LONG);
    }
  }, [responseMessage]);
  

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.imageContainer}
      >
        {image == "" ? (
          <Image
            style={styles.image}
            source={require("../../../../../../assets/addImage.png")}
          />
        ) : (
          <Image source={{ uri: image }} style={styles.image} />
        )}
      </TouchableOpacity>
      <View style={styles.form}>
        <CustomTextInput
          placeholder="Nombre de la Categoría"
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
      </View>

      <View style={styles.buttonContainer}>
        <RoundedButton text="Crear Categoría" onPress={() => createCategory()} />
      </View>

      <ModalPickImage
        openGallery={pickImage}
        openCamera={takePhoto}
        modalUseState={modalVisible}
        setModalUseState={setModalVisible}
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
