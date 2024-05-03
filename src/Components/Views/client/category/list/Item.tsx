import React from 'react'
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack';
import { Category } from '../../../../../Domain/entities/Category';
import { ClientStackParamList } from '../../../../../Presentation/navigator/ClientStackNavigator';


interface Props {
    category: Category,
    height: number,
    width: number,
    navigation: StackNavigationProp<ClientStackParamList, "ClientCategoryListScreen", undefined>
}

export const ClientCategoryItem = ({category, height, width, navigation}: Props) => {
  return (
    <TouchableOpacity 
    onPress={() => {
      // if(rol.name === 'ADMIN') {
      //   navigation.replace('AdminTabsNavigator');
      // }
      // else if(rol.name === 'CLIENTE') {
      //   navigation.replace('ClientTabsNavigator');
      // }
    }}
    style={{...styles.container, height, width: width}}>
      <View style={styles.imageContainer}>
        <Image 
        style={styles.image}
        source={{uri: category.image}}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{category.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
    // resizeMode: 'contain'
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
    height: 60,
    backgroundColor: "white",
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20, 
    //Sombreado para IOS
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 22
  }
})
