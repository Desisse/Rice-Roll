import React from "react";
import { Address } from "../../../../../Domain/entities/Address";
import { StyleSheet, Text, View } from "react-native";
import { RadioButton } from "react-native-paper";

interface Props {
  address: Address;
  checked: string;
  changeRadioValue: (address: Address) => void;
}

export const AddressListItem = ({address, checked, changeRadioValue }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <RadioButton 
            value={address.id!}
            status= {checked === address.id ? 'checked' : 'unchecked'}
            onPress={() => changeRadioValue(address)}
        />

        <View style={styles.infoAddress}>
            <Text style={styles.address}>{address.address}</Text>
            <Text style={styles.neighborhood}>{address.neighborhood}</Text>
        </View>

      </View>

      <View style={styles.divider}>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginTop: 15
        
    },
    info: {
        flexDirection: 'row'
    },
    divider: {
        width: '100%',
        height: 1,
        backgroundColor: '#DDDDDD',
        marginTop: 5
    },
    address: {
        fontSize: 16,
        fontWeight: '600'

    },
    neighborhood: {
        fontSize: 13,
        fontWeight: '400',
        color: '#948979'
    },
    infoAddress: {
        marginLeft: 5
    }
})