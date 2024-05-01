import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { View, Text, FlatList, Platform, ToastAndroid } from 'react-native';
import { ProductStackParamList } from '../../../../../Presentation/navigator/AdminProductNavigator';
import useViewModel from './ViewModel';
import { AdminProductListItem } from './Item';

interface Props extends StackScreenProps<ProductStackParamList, 'AdminProductListScreen'>{};

export const AdminProductListScreen = ({navigation, route}: Props) => {

    const {category} = route.params;
    const { products, responseMessage, getProducts, deleteProduct} = useViewModel();
    
    useEffect(() => {
     getProducts(category.id!);
    }, [])

    useEffect(() => {
      if (responseMessage !== "" && Platform.OS === "android") {
        ToastAndroid.show(responseMessage, ToastAndroid.LONG);
      }
    }, [responseMessage]);
    
    
  return (
    <View style={{backgroundColor: 'white'}}>
       <FlatList 
       data={ products}
       keyExtractor={(item) => item.id!}
       renderItem={({item}) => <AdminProductListItem product={item} remove={deleteProduct}/>}
       />
    </View>
  )
}
