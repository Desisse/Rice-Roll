import React, { useEffect } from "react";
import { View, FlatList, Text } from "react-native";
import useViewModel from "./ViewModel";
import { StackScreenProps } from "@react-navigation/stack";
import { ClientStackParamList } from "../../../../../Presentation/navigator/ClientStackNavigator";
import { ClientProductItem } from "./Item";


interface Props extends StackScreenProps<ClientStackParamList, "ClientProductListScreen"> {}

export const ClientProductListScreen = ({navigation, route}: Props) => {

    const {id_category} = route.params;
  const { products, getProducts } = useViewModel();

  useEffect(() => {
    getProducts(id_category);
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <FlatList 
      data={ products}
      keyExtractor={(item) => item.id!}
      renderItem={({item}) => <ClientProductItem product={item} navigation={navigation}/>}
      />
    </View>
  );
};
