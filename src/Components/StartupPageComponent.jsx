import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Animated } from 'react-native';
// import Svg, { Circle } from 'react-native-svg'; // We have to use SVG to form half circle

const StartupPageComponent = (props) => {
    const { pageno, onPress } = props;
    return (
        <>
            <View style={styles.secondaryBox}>
                <Text style={styles.heading}>We serve incomparable delicious</Text>
                <Text style={styles.subHeading}>
                    All the best restaurants with their top menu waiting for you, they
                    can't wait for your order!!
                </Text>
                <View style={styles.progressBars}>
                    <Animated.View style={[styles.individualProgressBar, { backgroundColor: pageno === 1 ? 'white' : '#C2C2C2' }]} />
                    <Animated.View style={[styles.individualProgressBar, { backgroundColor: pageno === 2 ? 'white' : '#C2C2C2' }]} />
                    <Animated.View style={[styles.individualProgressBar, { backgroundColor: pageno === 3 ? 'white' : '#C2C2C2' }]} />
                </View>

                {pageno !== 3 ? (
                    <View style={styles.footer}>
                        <Text style={styles.leftFooter}>Skip</Text>
                        <View style={styles.rightFooter}>
                            <Text style={styles.rightFooterText}>Next</Text>
                            <AntDesign name="arrowright" size={20} color="white" />
                        </View>
                    </View>
                ) : (
                    <View style={styles.halfCircularButton}>
                        <View style={styles.circularButton}>
                            <AntDesign name='arrowright' color={"#FE8C00"} size={24} style={{alignSelf: 'center'}} />
                        </View>
                    </View>
                )}

            </View>
        </>
    )
}

export default StartupPageComponent

const styles = StyleSheet.create({
    secondaryBox: {
        backgroundColor: "#FE8C00",
        height: 400,
        width: 311,
        position: "absolute",
        bottom: 36,
        borderRadius: 50,
        elevation: 10,
        alignItems: "center",
    },
    heading: {
        fontSize: 32,
        fontWeight: "600",
        color: "#fff",
        marginTop: 20,
        marginBottom: 10,
        textAlign: "center",
        height: 120,
        width: 252,
        // backgroundColor: 'blue',
    },
    subHeading: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: "400",
        color: "#fff",
        textAlign: "center",
        width: 252,
        height: 60,
        // backgroundColor: 'blue',
    },
    progressBars: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        width: 80,
        height: 10,
        marginTop: 10,
        gap: 4,
    },
    individualProgressBar: {
        width: 24,
        height: 6,
        backgroundColor: "#C2C2C2",
        borderRadius: 100,
    },
    footer: {
        width: 247,
        position: 'absolute',
        bottom: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    leftFooter: {
        color: 'white',
        fontSize: 15,
        fontWeight: '600',
    },
    rightFooter: {
        flexDirection: 'row',
        gap: 10,
    },
    rightFooterText: {
        fontSize: 15,
        fontWeight: "600",
        color: 'white',
    },
    halfCircularButton: {
        margin: 15,
        padding: 5,
        borderWidth: 2,
        borderColor: "white",
        borderRadius: 100,
        backgroundColor: '#FE8C00',
        borderEndColor: 'transparent',
        borderStyle: 'solid',
    },
    circularButton: {
        backgroundColor: 'white',
        elevation: 2,
        height: 62,
        width: 62,
        borderRadius: 100,
        alignItem: 'center',
        justifyContent: 'center',
        margin: 10,
        borderEndColor: 'transparent',
        borderStyle: 'solid',
    },
});