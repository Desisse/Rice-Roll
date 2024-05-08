import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProfileInfoScreen } from '../../Components/Views/profile/info/ProfileInfo';
import { Image } from 'react-native';
import { ClientStackNavigator } from './ClientStackNavigator';
import { ClientOrderStackNavigator } from './ClientOrderStackNavigator';

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
      name="ClientOrderStackNavigator" 
      component={ClientOrderStackNavigator} 
      options={{
        title: 'Mis Pedidos',
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