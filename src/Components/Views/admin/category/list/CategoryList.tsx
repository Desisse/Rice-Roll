import React, { useEffect } from "react";
import { View, Text, FlatList, ToastAndroid, Platform} from 'react-native';
import useViewModel from './ViewModel';
import { AdminCategoryListItem } from "./Item";

export const AdminCategoryListScreen = () => {

  const {categories, responseMessage, getCategories, deleteCategory} = useViewModel();

  useEffect(() => {
   getCategories();
  }, [])

  useEffect(() => {
    if (responseMessage !== "" && Platform.OS === "android") {
      ToastAndroid.show(responseMessage, ToastAndroid.LONG);
    }
  }, [responseMessage]);
  

  return (
    <View style={{backgroundColor: 'white'}}>
      <FlatList
      data={ categories}
      keyExtractor={(item) => item.id!}
      renderItem={ ({item}) => <AdminCategoryListItem category={item} remove={deleteCategory} />}
      />

    </View>
  );
};
