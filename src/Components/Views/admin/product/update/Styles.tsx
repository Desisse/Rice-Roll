import { StyleSheet } from "react-native";

const AdminProductUpdateStyles = StyleSheet.create({
    image: {
        width: 110,
        height: 110, 
        resizeMode: 'contain'
    },
    imageContainer: {
        paddingTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    form: {
        backgroundColor: 'white',
        height: '65%',
        width: '100%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingHorizontal: 30,
        position: 'absolute',
        bottom: 0
    },
    container: {
        flex: 1
    },
    buttonContainer: {
        marginTop: 80

    },
    loading: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    right: 0,
    left: 0
    },
    imageCategory: {
        width: 50,
        height: 50

    },
    categoryInfo: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textCategory: {
        color: '#948979',
        fontSize: 20,
        fontWeight: '500'
    },
    nameCategory: {
        color:'#1A4D2E',
        fontSize: 17,
        fontWeight: '600'
    }
});

export default AdminProductUpdateStyles;