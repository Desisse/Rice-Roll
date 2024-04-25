import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AdminCategoryListScreen } from '../../Components/Views/admin/category/list/CategoryList';
import { AdminOrderListScreen } from '../../Components/Views/admin/order/list/OrderList';
import { ProfileInfoScreen } from '../../Components/Views/profile/info/ProfileInfo';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

export const AdminTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
      name="AdminCategoryListScreen" 
      component={AdminCategoryListScreen} 
      options={{
        title: 'Categorias',
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
      name="AdminOrderListScreen" 
      component={AdminOrderListScreen} 
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