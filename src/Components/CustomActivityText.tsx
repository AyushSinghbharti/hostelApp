import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5, Entypo } from "@expo/vector-icons";

const CustomActivityText = (props) => {
  const { name, iconLogo, textColor, iconColor } = props;

  return (
    <View style={{flexDirection: 'row'}}>
      <Entypo name="dot-single" size={24} color={iconColor} />
      <View style={styles.activities}>
        <Text style={[styles.activity, {color: textColor}]}>{name}</Text>
        <FontAwesome5 name={iconLogo} size={20} color={iconColor} />
      </View>
    </View>
  );
};

export default CustomActivityText;

const styles = StyleSheet.create({
  activities: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 3,
  },
  activity: {
    fontSize: 16,
    marginBottom: 5,
    color: "black",
  },
});
