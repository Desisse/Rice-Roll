import React from 'react'
import { Image, Text, View } from 'react-native'
import styles from './Styles';
import { FlatList } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { AdminOrderStackParamList } from '../../../../../Presentation/navigator/AdminOrderStackNavigator';
import { OrderDetailItem } from './Item';
import { DateFormat } from '../../../../../Presentation/utils/DateFormat';
import useViewModel from './ViewModel';
import { RoundedButton } from '../../../../Components/RoundedButton';

interface Props extends StackScreenProps<AdminOrderStackParamList, 'AdminOrderDetailScreen'>{};

export const AdminOrderDetailScreen = ({navigation, route}: Props) => {

  const {order} = route.params;

  const { total} = useViewModel(order);
  return (
    <View style={styles.container}>
      <View style={styles.products}>
        <FlatList
        data={order.products}
        keyExtractor={(item) => item.id!}
        renderItem={({item}) => <OrderDetailItem product={item}/> }
        />

      </View>

        <View style={styles.info}>
          <View style={styles.infoRow}>
            <View style={styles.infoText}>
              <Text style={styles.dateOrder}> Fecha del Pedido</Text>
              <Text style={styles.date}>{ DateFormat(order.timestamp!)}</Text>
            </View>
            <Image
            style={styles.imageOrder}
            source={require('../../../../../../assets/clock.png')}
            />
          </View>

          <View style={styles.infoRow}>
            <View style={styles.infoText}>
              <Text style={styles.dateOrder}> Cliente y Telefono</Text>
              <Text style={styles.date}>{order.client?.name} {order.client?.lastname} - {order.client?.phone}</Text>
            </View>
            <Image
            style={styles.imageOrder}
            source={require('../../../../../../assets/user.png')}
            />
          </View>

          <View style={styles.infoRow}>
            <View style={styles.infoText}>
              <Text style={styles.dateOrder}> Direccion de Entrega</Text>
              <Text style={styles.date}>{order.address?.address} - {order.address?.neighborhood} </Text>
            </View>
            <Image
            style={styles.imageOrder}
            source={require('../../../../../../assets/reference.png')}
            />
          </View>

          <Text style={styles.delivery}>ASIGNAR REPARTIDOR</Text>

          <View style={styles.totalInfo}>
            <Text style={styles.total}>TOTAL: ${total} </Text>
            <View style={styles.button}>
            <RoundedButton  text='Terminar Orden' onPress={() => {}}/>
            </View>
          </View>

        </View>
    </View>
  )
}
