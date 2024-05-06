import { StyleSheet } from "react-native";

const ClientAddressMapStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageLocation: {
        height: 60,
        width: 60, 
        justifyContent: 'center',
        position: 'absolute'
    },
    refPoint: {
        position: 'absolute',
        backgroundColor: '#EEE2DE',
        width: '70%',
        paddingVertical: 4,
        top: 40, 
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    refPointText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '700'
    },
    buttonRefPoint: {
        position: 'absolute',
        bottom: 40,
        width: '70%'
    }

});

export default ClientAddressMapStyles;