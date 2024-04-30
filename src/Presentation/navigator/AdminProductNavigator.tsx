import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { AdminProductListScreen } from '../../Components/Views/admin/product/list/ProductList'
import { Category } from '../../Domain/entities/Category'
import { StackScreenProps } from '@react-navigation/stack'
import { CategoryStackParamList } from './AdminCategoryNavigator'
import { AdminProductCreateScreen } from '../../Components/Views/admin/product/create/ProductCreate'
import { TouchableOpacity, Image } from 'react-native'

export type ProductStackParamList = {
    AdminProductListScreen: {category: Category};
    AdminProductCreateScreen: {category: Category};
    
}

const Stack = createNativeStackNavigator<ProductStackParamList>();

interface Props extends StackScreenProps<CategoryStackParamList, 'AdminProductNavigator'>{};

export const AdminProductNavigator = ({navigation, route}: Props) => {
  return (
   <Stack.Navigator
   screenOptions={{
    headerShown: false
   }}
   >

    <Stack.Screen 
    name = 'AdminProductListScreen'
    component={AdminProductListScreen}
    initialParams={{category: route.params.category}}
    options={({ route, navigation }) => ({
      headerShown: true,
      title: "Productos",
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('AdminProductCreateScreen')}
        >
          <Image
            source={require("../../../assets/add.png")}
            style={{ width: 35, height: 35 }}
          />
        </TouchableOpacity>
      ),
    })}
    />

    <Stack.Screen 
    name = 'AdminProductCreateScreen'
    component={AdminProductCreateScreen}
    initialParams={{category: route.params.category}}
    options={{
      title: 'Nuevo Producto',
      headerShown: true
    }}
    />

   </Stack.Navigator>
  )
}