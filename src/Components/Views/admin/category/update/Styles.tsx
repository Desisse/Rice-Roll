import { StyleSheet } from "react-native";

const AdminCategoryUpdateStyles = StyleSheet.create({
    image: {
        width: '100%',
        height: 150, 
        resizeMode: 'contain'
    },
    imageContainer: {
        paddingTop: 50
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
        position: 'absolute',
        bottom: 30,
        left: 20,
        right: 20
    },
    loading: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    right: 0,
    left: 0
    }
});

export default AdminCategoryUpdateStyles;