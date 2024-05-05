import { StyleSheet } from "react-native";

const ClientShoppingBagStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    totalToPay: {
        flexDirection: 'row',
        height: 70,
        backgroundColor: '#F5EFE6',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 30
    },
    totalText: {
        fontSize: 19,
        fontWeight: '700',
        color: '#B32020'
    },
    totalInfo: {
        alignItems: 'center'
    },
    totalPrice: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    button: {
        width: '50%'
    }

});

export default ClientShoppingBagStyles;