import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5, Entypo } from "@expo/vector-icons";

const CustomActivityText = (props) => {
  const { name, iconLogo } = props;

  return (
    <View style={{flexDirection: 'row'}}>
      <Entypo name="dot-single" size={24} color="black" />
      <View style={styles.activities}>
        <Text style={styles.activity}>{name}</Text>
        <FontAwesome5 name={iconLogo} size={20} color="black" />
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
  activitiesTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333", // Adjust color for better contrast
  },
  activity: {
    fontSize: 16,
    marginBottom: 5,
    color: "#555", // Adjust color for better contrast
  },
});
