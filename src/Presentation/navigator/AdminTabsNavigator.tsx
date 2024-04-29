import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AdminCategoryListScreen } from '../../Components/Views/admin/category/list/CategoryList';
import { AdminOrderListScreen } from '../../Components/Views/admin/order/list/OrderList';
import { ProfileInfoScreen } from '../../Components/Views/profile/info/ProfileInfo';
import { Image, TouchableOpacity } from 'react-native';
import { AdminCategoryNavigator } from './AdminCategoryNavigator';

const Tab = createBottomTabNavigator();

export const AdminTabsNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      headerShown: false
    }}
    >
      <Tab.Screen 
      name="AdminCategoryNavigator" 
      component={AdminCategoryNavigator}
      options={({ route, navigation }) => ({
        title: "Categorias",
        tabBarLabel: "Categorias",
        headerShown: false,
        tabBarIcon: () => (
          <Image
            source={require("../../../assets/category.png")}
            style={{ width: 25, height: 25 }}
          />
        ),
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.navigate("AdminCategoryCreateScreen")}
          >
            <Image
              source={require("../../../assets/add.png")}
              style={{ width: 35, height: 35, marginRight: 16 }}
            />
          </TouchableOpacity>
        ),
      })} 
     
      />

      <Tab.Screen 
      name="AdminOrderListScreen" 
      component={AdminOrderListScreen} 
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