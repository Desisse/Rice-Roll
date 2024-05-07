import React from 'react'
import { Product } from '../../../../../Domain/entities/Product'
import { Image, StyleSheet, View, Text } from 'react-native'

interface Props {
    product: Product
}

export const OrderDetailItem = ({ product}: Props) => {
  return (
    <View style={styles.container}>
        <Image 
        source={{uri: product.image1}}
        style={styles.image}
        />
        <View style={styles.productInfo}>
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.quantity}> Cantidad: {product.quantity}</Text>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 10,
        marginHorizontal: 20,
        alignItems: 'center'
    },
    image: {
        height: 75,
        width: 75,
        borderRadius: 15
    },
    productInfo: {
        marginLeft: 15
    },
    name: {
        fontSize: 16,
         fontWeight: '700'
    },
    quantity: {
        fontSize: 13,
        fontWeight: '400',
        marginTop: 5
    }
})
