import React, { useEffect } from "react";
import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import useViewModel from "./ViewModel";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../../App";
import styles from "./Styles";
import { useNavigation } from "@react-navigation/native";
import { RoundedButton } from "../../../Components/RoundedButton";

export const ProfileInfoScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { user, removeUserSession } = useViewModel();

  useEffect(() => {
    if(user.id === '') {
      navigation.replace("HomeScreen");
    }
  }, [user])
  

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../../assets/fondo.jpg")}
        style={styles.imageBackground}
      />

      <TouchableOpacity
        style={styles.logout}
        onPress={() => {
          removeUserSession();
        }}
      >
        <Image
          source={require("../../../../../assets/logout.png")}
          style={styles.logoutImage}
        />
      </TouchableOpacity>

      <View style={styles.userContainer}>
        {
        user?.image !== '' 
        &&
        <Image source={{ uri: user?.image }} style={styles.userImage} />
        }
      </View>
      <View style={styles.form}>
        <Text style={styles.formText}>Perfil </Text>
        <View style={styles.formInfo}>
          <Image
            source={require("../../../../../assets/user.png")}
            style={styles.formImage}
          />
          <View style={styles.formContent}>
            <Text>
              {user?.name} {user?.lastname}
            </Text>
            <Text style={styles.formTextDescription}>Nombre del usuario</Text>
          </View>
        </View>

        <View style={{ ...styles.formInfo, marginTop: 25 }}>
          <Image
            source={require("../../../../../assets/email.png")}
            style={styles.formImage}
          />
          <View style={styles.formContent}>
            <Text>{user?.email}</Text>
            <Text style={styles.formTextDescription}>Correo electrónico</Text>
          </View>
        </View>

        <View style={{ ...styles.formInfo, marginTop: 25, marginBottom: 60 }}>
          <Image
            source={require("../../../../../assets/phone.png")}
            style={styles.formImage}
          />
          <View style={styles.formContent}>
            <Text>{user?.phone}</Text>
            <Text style={styles.formTextDescription}>Teléfono</Text>
          </View>
        </View>

        <RoundedButton onPress={() => {
          navigation.navigate('ProfileUpdateScreen', {user: user!}); 
        }} text="Actualizar Información" />
      </View>
    </View>
  );
};

{
  /*
    <Button 
    onPress={() => { 
      removeSession();
      navigation.navigate('HomeScreen');
    }}
    title='Cerrar Sesion'/>
  */
}
