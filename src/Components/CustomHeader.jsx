import React from 'react'
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native'
import { Entypo } from '@expo/vector-icons';


const CustomHeader = (props) => {
    const { onPress, title } = props;
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} style={styles.icon}>
                <Entypo name="chevron-small-left" size={24} color="black" />
            </TouchableOpacity>
            <View style={styles.titleView}>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    )
}

export default CustomHeader;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 30
    },
    icon: {
        justifyContent: 'center',
        marginRight: 4
    },
    headerText: {
        color: '#101010',
        fontSize: 16,
        fontWeight: "600",

    },
    titleView: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

