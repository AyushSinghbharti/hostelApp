import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton'
import { BlurView } from 'expo-blur'

const CustomSuccess = (props) => {
    const { heading, subHeading, buttonText, onPress, isBlur } = props;
    return (
        isBlur === true ? (
            <BlurView experimentalBlurMethod='dimezisBlurView' intensity={20} style={{ flex: 1 }} tint={'dark'}>
                <View style={styles.box}>
                    <View style={styles.nozzel} />
                    <Image source={require("../assets/success.png")} style={styles.image} />
                    <Text style={styles.heading}>{heading}</Text>
                    <Text style={styles.subHeading}>{subHeading}</Text>
                    <View style={styles.footer}>
                        <CustomButton title={buttonText} onPress={onPress} />
                    </View>
                </View>
            </BlurView>
        ) : (
                <View style= {[styles.box, {flex: 1}]}>
                    <View style={styles.nozzel} />
                    <Image source={require("../assets/success.png")} style={styles.image} />
                    <Text style={styles.heading}>{heading}</Text>
                    <Text style={styles.subHeading}>{subHeading}</Text>
                    <View style={styles.footer}>
                        <CustomButton title={buttonText} onPress={onPress} />
                    </View>
                </View>
        )
    )
}

export default CustomSuccess

const styles = StyleSheet.create({
    box: {
        paddingHorizontal: 20,
        height: 492,
        width: "100%",
        alignItems: 'center',
        // justifyContent:'center',
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'white',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
    nozzel: {
        marginTop: 10,
        marginBottom: 20,
        height: 0,
        width: 60,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#CDCDCD",
    },
    image: {
        marginTop: 30,
        height: 170,
        width: 202,
        marginBottom: 30,
    },
    heading: {
        fontSize: 24,
        fontWeight: "700",
        textAlign: 'center',
    },
    subHeading: {
        marginTop: 20,
        marginBottom: 10,
        textAlign: 'center',
    },
    footer: {
        marginTop: 35,
    }
})