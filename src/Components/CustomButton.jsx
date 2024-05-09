import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = (props) => {
  let { title, onPress, style , buttonColor} = props;
  buttonColor ? buttonColor = '#FE8C00' : buttonColor = buttonColor;
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity style={styles.touchPart} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FE8C00',
    borderRadius: 50,
    width: 327,
    height: 52,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '500',
    color: '#fff',

  },
  touchPart: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }

})
export default CustomButton