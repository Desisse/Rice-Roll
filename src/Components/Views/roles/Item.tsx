import React from 'react'
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native'
import { Rol } from '../../../Domain/entities/Rol';

interface Props {
    rol: Rol,
    height: number,
    width: number
}

export const RolesItem = ({rol, height, width}: Props) => {
  return (
    <TouchableOpacity style={{...styles.container, height, width: width}}>
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
