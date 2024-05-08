import React, { useEffect } from "react";
import { FlatList, Platform, Text, ToastAndroid, View } from "react-native";
import useViewModel from "./ViewModel";
import { AddressListItem } from "./Item";
import { RoundedButton } from "../../../../Components/RoundedButton";
import { StackScreenProps } from "@react-navigation/stack";
import { ClientStackParamList } from "../../../../../Presentation/navigator/ClientStackNavigator";

interface Props extends StackScreenProps<ClientStackParamList, 'ClientAddressListScreen'>{};

export const ClientAddressListScreen = ({navigation, route}: Props) => {
  const {
    address,
    checked,
    responseMessage,
    getAddress,
    changeRadioValue,
    createOrder,
  } = useViewModel();

  useEffect(() => {
    if (responseMessage !== "" && Platform.OS === "android") {
      ToastAndroid.show(responseMessage, ToastAndroid.LONG);
    }
  }, [responseMessage]);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <FlatList
        data={address}
        keyExtractor={(item) => item.id!}
        renderItem={({ item }) => (
          <AddressListItem
            address={item}
            checked={checked}
            changeRadioValue={changeRadioValue}
          />
        )}
      />

      <View style={{ width: '100%', paddingHorizontal: 20, paddingVertical: 20}}>
        {/* <RoundedButton 
        onPress={() => createOrder()}
        text="Continuar"
        /> */}
         <RoundedButton 
        onPress={() => navigation.navigate('ClientPaymentFormScreen')}
        text="Continuar"
        />
      </View>
    </View>
  );
};
