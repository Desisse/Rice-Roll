import { StyleSheet } from "react-native";

const AdminOrderDetailStyles = StyleSheet.create({
    container: {
        flex: 1
    },
    products: {
        width: '100%',
        height: '50%'

    },
    info: {
        width: '100%',
        height: '50%',
        backgroundColor: 'white',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingHorizontal: 30
    },
    infoRow: {
        flexDirection: 'row',
        marginTop: 15
    },
    imageOrder: {
        width: 30,
        height: 30
    },
    infoText: {
        flex: 1
    },
    dateOrder: {
        fontSize: 16,
        fontWeight: '300'
    },
    date: {
        fontSize: 13,
        color: '#B4B4B8',
        marginTop: 3
    },
    delivery: {
        fontWeight: '600',
        marginTop: 20,
        color: '#C40C0C'
    },
    totalInfo: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    total: {
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 50
    },
    button: {
        width: '50%',
        marginTop: 45
    },
    dropDown: {
        marginTop: 15,

    }
})

export default AdminOrderDetailStyles;