import React from "react";
import { TextInput, View, Image, StyleSheet, KeyboardType } from "react-native";

interface Props {
  image: any;
  placeholder: string;
  value: string;
  keyboardType: KeyboardType;
  secureTextEntry?: boolean;
  property: string;
  onChangeText: (property: string, value: any) => void;
}

export const CustomTextInput = ({
  image,
  placeholder,
  value,
  keyboardType,
  secureTextEntry = false,
  property,
  onChangeText,
}: Props) => {
  return (
    <View style={styles.formInput}>
      <Image style={styles.formIcon} source={image} />
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        keyboardType={keyboardType}
        value={value}
        onChangeText={(text) => onChangeText(property, text)}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  formInput: {
    flexDirection: "row",
    marginTop: 30,
  },
  textInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#AAAAAA",
    marginLeft: 15,
  },
  formIcon: {
    width: 28,
    height: 28,
    marginTop: 5,
  },
});
