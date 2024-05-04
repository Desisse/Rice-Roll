import { StyleSheet } from "react-native";

const ClientProductDetailStyles = StyleSheet.create({
    productImage: {
        width: '100%',
        height: '45%'
    },
    container: {
        flex: 1, 
        backgroundColor: 'white'
    },
    productDetail: {
        position: 'absolute',
        width: '100%',
        height: '57%',
        backgroundColor: 'white',
        bottom: 0,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    divider: {
        height: 1,
        backgroundColor: '#DDDDDD',
        marginTop: 20
    },
    productInfo: {
        padding: 25
    },
    productName: {
        fontSize: 25,
        alignSelf: 'center',
        fontWeight: '700',
    },
    productDescription: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: '500'
    },
    productContent: {
        fontSize: 15,
        marginTop: 5
    },
    productPrice: {
        fontSize: 15,
        marginTop: 5,
        color: 'red',
        fontWeight: '600'
    },
    productActions: {
        flexDirection: 'row',
        height: 70,
        paddingHorizontal: 30,
        top: 150
    },
    actionText: {
        color: 'white',
        fontSize: 15
    },
    actionLess: {
        backgroundColor: '#3a3a3a',
        paddingVertical: 5,
        paddingHorizontal: 10,
        alignSelf: 'center',
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10
    },
    quantity: {
        backgroundColor: '#3a3a3a',
        paddingVertical: 5,
        paddingHorizontal: 15,
        alignSelf: 'center',
    },
    actionAdd: {
        backgroundColor: '#3a3a3a',
        paddingVertical: 5,
        paddingHorizontal: 10,
        alignSelf: 'center',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    },
    button: {
        flex: 1,
        marginLeft: 20,
        alignItems: 'center'
    }
})

export default ClientProductDetailStyles;