import React from "react";
import { Image, Text, TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import { RoundedButton } from "../../Components/RoundedButton";


export const RegisterScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../../../assets/sushi.jpg')}
                style={styles.imageBackground}
            />
            <View style={styles.form}>
                <Text style={styles.formText}>REGISTRARSE</Text>

                <View style={styles.formInput}>
                    <Image
                        style={styles.formIcon}
                        source={require('../../../../assets/user.png')}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder='Nombre'
                        keyboardType='default' />
                </View>

                <View style={styles.formInput}>
                    <Image
                        style={styles.formIcon}
                        source={require('../../../../assets/user.png')}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder='Apellido'
                        keyboardType='default' />
                </View>

                <View style={styles.formInput}>
                    <Image
                        style={styles.formIcon}
                        source={require('../../../../assets/email.png')}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder='Email'
                        keyboardType='email-address' />
                </View>

                <View style={styles.formInput}>
                    <Image
                        style={styles.formIcon}
                        source={require('../../../../assets/phone.png')}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder='Telefono'
                        keyboardType='numeric' />
                </View>

                <View style={styles.formInput}>
                    <Image
                        style={styles.formIcon}
                        source={require('../../../../assets/password.png')}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder='Contraseña'
                        keyboardType='default'
                        secureTextEntry={true} />
                </View>

                <View style={styles.formInput}>
                    <Image
                        style={styles.formIcon}
                        source={require('../../../../assets/password.png')}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder='Confirmar Contraseña'
                        keyboardType='default'
                        secureTextEntry={true} />
                </View>

                <View style={{ marginTop: 30 }}>
                    <RoundedButton text='CONFIRMAR' onPress = { () => {}} />
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        opacity: 0.7,
        bottom: '20%'
    },
    form: {
        width: '100%',
        height: '70%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 30
    },
    formText: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    formInput: {
        flexDirection: 'row',
        marginTop: 30
    },
    textInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#AAAAAA',
        marginLeft: 15
    },
    formIcon: {
        width: 28,
        height: 28,
        marginTop: 5
    },
    formRegister: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30
    },
    formRegisterText: {
        fontStyle: 'italic',
        color: '#B91C1C',
        borderBottomWidth: 1,
        borderBottomColor: '#B91C1C',
        fontWeight: 'bold',
        marginLeft: 10
    }
});
