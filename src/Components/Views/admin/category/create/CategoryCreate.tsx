import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import styles from "./Styles";
import { CustomTextInput } from "../../../../Components/CustomTextInput";
import useViewModel from "./ViewModel";
import { RoundedButton } from "../../../../Components/RoundedButton";

export const AdminCategoryCreateScreen = () => {
  const { name, description, onChange } = useViewModel();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../../../../../assets/addImage.png")}
        />
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
        <RoundedButton text="Crear Categoría" onPress={() => {}} />
      </View>
    </View>
  );
};
