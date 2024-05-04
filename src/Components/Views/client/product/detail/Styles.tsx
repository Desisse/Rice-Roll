import { StyleSheet } from "react-native";

const ClientProductDetailStyles = StyleSheet.create({
    productImage: {
        width: '100%',
        height: '47%'
    },
    container: {
        flex: 1, 
        backgroundColor: 'white'
    },
    productDetail: {
        position: 'absolute',
        width: '100%',
        height: '55%',
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
        fontWeight: '800',
        color: '#A94438'
    },
    productContent: {
        fontSize: 17,
        marginTop: 5,
        fontWeight: '300',
    },
    productPrice: {
        fontSize: 18,
        marginTop: 5,
        color: 'red',
        fontWeight: '700'
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
        paddingVertical: 8,
        paddingHorizontal: 10,
        alignSelf: 'center',
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        bottom: 43
    },
    quantity: {
        backgroundColor: '#3a3a3a',
        paddingVertical: 8,
        paddingHorizontal: 15,
        alignSelf: 'center',
        bottom: 43
    },
    actionAdd: {
        backgroundColor: '#3a3a3a',
        paddingVertical: 8,
        paddingHorizontal: 10,
        alignSelf: 'center',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        bottom: 43
    },
    button: {
        flex: 1,
        marginLeft: 20,
        alignItems: 'center',
        bottom: 35
    },
    back: {
        position: 'absolute',
        top: 45,
        left: 15
    },
    backImage: {
        height: 40,
        width: 40
    }
})

export default ClientProductDetailStyles;