import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AdminCategoryListScreen } from '../../Components/Views/admin/category/list/CategoryList';
import { AdminOrderListScreen } from '../../Components/Views/admin/order/list/OrderList';
import { ProfileInfoScreen } from '../../Components/Views/profile/info/ProfileInfo';
import { Image, TouchableOpacity } from 'react-native';
import { AdminCategoryNavigator } from './AdminCategoryNavigator';
import { AdminOrderStackNavigator } from './AdminOrderStackNavigator';
import { DeliveryOrderStackNavigator } from './DeliveryOrderStackNavigator';

const Tab = createBottomTabNavigator();

export const DeliveryTabsNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      headerShown: false
    }}
    >

      <Tab.Screen 
      name="DeliveryOrderStackNavigator" 
      component={DeliveryOrderStackNavigator} 
      options={{
        title: 'Pedidos',
        tabBarLabel: 'Pedidos',
        headerShown: true,
        tabBarIcon: ({ color }) => (
          <Image 
          source={require('../../../assets/orders.png')}
          style={{width: 25, height: 25}}
          />
        )
      }}
      />

      <Tab.Screen 
      name="ProfileInfoScreen" 
      component={ProfileInfoScreen} 
      options={{
        title: 'Perfil',
        tabBarLabel: 'Perfil',
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <Image 
          source={require('../../../assets/perfil.png')}
          style={{width: 25, height: 25}}
          />
        )
      }}
      />
    </Tab.Navigator>
  );
}