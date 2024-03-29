import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    TouchableOpacityProps
} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonProps extends TouchableOpacityProps {
    title: string
}

export function Button({ title, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity
            style={styles.container}
            {...rest}
        >

            <Text style={styles.buttonText}>
                {title}
            </Text>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16
    },

    buttonText: {
        color: colors.white,
        fontSize: 16,
        fontFamily: fonts.heading
    }
})