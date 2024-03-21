import React from 'react'
import { TouchableOpacity, Text, StyleSheet} from 'react-native'

interface Props {
    text: string
}

export const RoundedButton = ({ text}: Props) => {
    return (
       <TouchableOpacity
       style={styles.roundedButton}
       onPress={() => {}}
       >
        <Text style={styles.textButton}>{text}</Text>
       </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    roundedButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#B91C1C',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
    },
    textButton: {
        color: 'white',
        fontWeight: 'bold'
    }
});