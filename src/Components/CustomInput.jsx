import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import EyeClose from '../../assets/EyeClose.png';
import { Feather } from '@expo/vector-icons';

const CustomInput = (props) => {
    const { label, onChangeText, placeholder, error, isPassword, style, value } = props;
    const [viewPassword, setViewPassword] = useState(false);
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    placeholderTextColor='#878787'
                    secureTextEntry={viewPassword ? true : false}
                    value={value}
                    onChangeText={onChangeText}
                />
                {isPassword && <TouchableOpacity style={styles.eyeButton} onPress={() => setViewPassword(prev => !prev)}>
                    {viewPassword ?
                        <Feather name="eye" size={24} color="black" /> :
                        <Image source={EyeClose} style={styles.eyeIcon} />
                    }
                </TouchableOpacity>}
            </View>
            {error ? (
                <Text style={styles.errorText} >{error}</Text>
            ) : (<View style={{ paddingTop: 4 }} />)}
            {error && <Text style={styles.errorText} >{error}</Text>}
        </View>
    )
}

export default CustomInput;

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        height: 50,
        borderColor: '#EDEDED',
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 8,
        // marginTop: 6,
        marginTop: 5,
        paddingLeft: 20,
        fontSize: 16,
        fontWeight: '600',
        marginVertical: 1
    },
    label: {
        color: '#101010',
        fontSize: 16,
        fontWeight: '500',
    },
    eyeIcon: {
        width: 20,
        height: 20,
    },
    eyeButton: {
        position: 'absolute',
        right: 15,
    },
    errorText: {
        color: 'red',
        fontSize: 8,
        fontWeight: '500',
        margin: 3,
        fontSize: 16,
        fontWeight: '400',
        marginVertical: 2
    }
});
