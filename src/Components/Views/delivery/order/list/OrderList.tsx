import React, { useEffect } from "react";
import { View, Text, useWindowDimensions, FlatList } from "react-native";
import useViewModel from './ViewModel';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Item } from "react-native-paper/lib/typescript/components/Drawer/Drawer";
import { OrderListItem } from "./Item";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AdminOrderStackParamList } from "../../../../../Presentation/navigator/AdminOrderStackNavigator";
import { DeliveryOrderStackParamList } from "../../../../../Presentation/navigator/DeliveryOrderStackNavigator";

interface Props {
  status: string;
}

 const OrderListScreen = ({status}: Props) => {

  const { ordersPayed, ordersDispatched, ordersOnTheWay, ordersDelivery, user, getOrders} = useViewModel();

  const navigation = useNavigation<StackNavigationProp<DeliveryOrderStackParamList, 'DeliveryOrderListScreen'>>();

  useEffect(() => {
    getOrders(user?.id!, status);
}, [user])
  
  return (
    <View>
      <FlatList
      data={
        status === 'DESPACHADO'
        ? ordersDispatched
        : status === 'EN CAMINO'
        ? ordersOnTheWay
        : status === 'ENTREGADO'
        ? ordersDelivery
        : []
      }
      keyExtractor={ (item) => item.id!}
      renderItem={({item}) => <OrderListItem order={item} navigation={navigation} />}
      />
    </View>
  );
};


const renderScene = ({ route }: any) => {
  switch (route.key) {
    case 'second':
      return <OrderListScreen status="DESPACHADO" />;
    case 'third':
        return <OrderListScreen status="EN CAMINO" />;
        case 'fourth':
          return <OrderListScreen status="ENTREGADO" />;
    default:
    return <OrderListScreen status="DESPACHADO" />;

  }
};

export const DeliveryOrderListScreen = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'second', title: 'DESPACHADO' },
    { key: 'third', title: 'EN CAMINO' },
    { key: 'fourth', title: 'ENTREGADO' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={props => (
        <TabBar
        {...props}
        indicatorStyle = {{backgroundColor: 'white' }}
        scrollEnabled={true}
        style={{backgroundColor: '#7D0A0A', height: 50, alignItems: 'center', justifyContent: 'center'}}
        />
      )}
    />
  );
}