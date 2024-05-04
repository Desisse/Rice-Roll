import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProfileInfoScreen } from '../../Components/Views/profile/info/ProfileInfo';
import { ClientCategoryListScreen } from '../../Components/Views/client/category/list/CategoryList';
import { ClientOrderListScreen } from '../../Components/Views/client/order/list/OrderList';
import { Image } from 'react-native';
import { ClientStackNavigator } from './ClientStackNavigator';

const Tab = createBottomTabNavigator();

export const ClientTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
      name="ClientStackNavigator" 
      component={ClientStackNavigator}
      options={{
        title: 'Categorias',
        headerShown: false,
        tabBarLabel: 'Categorias',
        tabBarIcon: ({ color }) => (
          <Image 
          source={require('../../../assets/category.png')}
          style={{width: 25, height: 25}}
          />
        )
      }}
       />

      <Tab.Screen 
      name="ClientOrderListScreen" 
      component={ClientOrderListScreen} 
      options={{
        title: 'Pedidos',
        tabBarLabel: 'Pedidos',
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