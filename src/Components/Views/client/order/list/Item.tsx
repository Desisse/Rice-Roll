import React from 'react'
import { Order } from '../../../../../Domain/entities/Order'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DateFormat } from '../../../../../Presentation/utils/DateFormat';
import { StackNavigationProp } from '@react-navigation/stack';
import { ClientOrderStackParamList } from '../../../../../Presentation/navigator/ClientOrderStackNavigator';

interface Props {
    order: Order;
    navigation: StackNavigationProp<ClientOrderStackParamList, 'ClientOrderListScreen', undefined>
}

export const OrderListItem = ({order, navigation}: Props) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('ClientOrderDetailScreen', {order: order})}>
    <View style={styles.container} >
        <Text style={styles.order}>Orden #{order.id}</Text>
        <Text style={styles.date}>Fecha del pedido: {DateFormat(order.timestamp!)}</Text>
        <Text style={styles.clientInfo}>Cliente: {order.client?.name} {order.client?.lastname}</Text>
        <Text style={styles.clientInfo}>Direccion del pedido: {order.address?.address}</Text>
        <Text style={styles.clientInfo}>Fraccionamiento: {order.address?.neighborhood}</Text>
        <View style={styles.divider}></View>
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    divider: {
        height: 1,
        width: '100%',
        backgroundColor: 'gray',
        marginTop: 13
    },
    order: {
        fontSize: 16,
        fontWeight: '600',
        color: '#508D69',
        marginVertical: 10
    },
    date: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    clientInfo: {
        fontSize: 14,
        fontWeight: '300'
    }
})
