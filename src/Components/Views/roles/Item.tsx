import React from 'react'
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native'
import { Rol } from '../../../Domain/entities/Rol';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../Presentation/navigator/MainStackNavigator';


interface Props {
    rol: Rol,
    height: number,
    width: number,
    navigation: StackNavigationProp<RootStackParamList, "RolesScreen", undefined>
}

export const RolesItem = ({rol, height, width, navigation}: Props) => {
  return (
    <TouchableOpacity 
    onPress={() => {
      if(rol.name === 'ADMIN') {
        navigation.replace('AdminTabsNavigator');
      }
      else if(rol.name === 'CLIENTE') {
        navigation.replace('ClientTabsNavigator');
      }
      else if(rol.name === 'REPARTIDOR') {
        navigation.replace('DeliveryTabsNavigator');
      }
    }}
    style={{...styles.container, height, width: width}}>
      <View style={styles.imageContainer}>
        <Image 
        style={styles.image}
        source={{uri: rol.image}}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{rol.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'contain'
  },
  container: {
    alignSelf: 'center',
    paddingBottom: 20,
    paddingHorizontal: 7
  },
  imageContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 18
  },
  titleContainer: {
    height: 50,
    backgroundColor: "#B91C1C",
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: 'white',
    fontWeight: '600'
  }
})
