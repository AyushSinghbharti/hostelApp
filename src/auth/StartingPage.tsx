import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";

const WelcomeScreen = () => {
  const [userType, setUserType] = useState(null);
  const administratorImage = {
    uri: "https://www.totaljobs.com/advice/wp-content/uploads/administrator-job-description-1024x576.jpg",
  };
  const studentImage = {
    uri: "https://png.pngtree.com/png-vector/20200718/ourlarge/pngtree-student-with-her-books-and-backpack-flat-illustration-vector-png-image_2307570.jpg",
  };
  const handleSelection = (type) => {
    setUserType(type);
  };

  return (
    // <View style={[styles.container]}>
    // <ImageBackground
    //   style={styles.container}
    //   source={{
    //     uri: "https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b",
    //   }}
    // >
    <ImageBackground
      source={userType === "administrator" ? administratorImage : studentImage}
      resizeMode="cover"
      style={[
        styles.container,
        { backgroundColor: userType === "administrator" ? "#ECE2E5" : "#fff" },
      ]}
      imageStyle={{ position: "absolute", bottom: 450, marginTop: 50 }}
    >
      <View style={{position: 'absolute', bottom: 150, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.welcomeText}>Welcome to the App</Text>
        <View style={styles.optionsContainer}>
          <TouchableOpacity
            style={[
              styles.optionButton,
              userType === "administrator" && styles.selectedOption,
            ]}
            onPress={() => handleSelection("administrator")}
          >
            <Text style={styles.optionText}>Administrator</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.optionButton,
              userType === "student" && styles.selectedOption,
            ]}
            onPress={() => handleSelection("student")}
          >
            <Text style={styles.optionText}>Student</Text>
          </TouchableOpacity>
        </View>
        {userType && (
          <Text style={styles.welcomeMessage}>Welcome, {userType}!</Text>
        )}
        
      </View>
    </ImageBackground>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  welcomeText: {
    fontSize: 28,
    marginBottom: 40,
    fontWeight: "bold",
    color: "#333",
  },
  optionsContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  optionButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#4CAF50",
    backgroundColor: "#fff",
    elevation: 3,
  },
  selectedOption: {
    backgroundColor: "#4CAF50",
  },
  optionText: {
    fontSize: 20,
    color: "#333",
    fontWeight: "bold",
  },
  welcomeMessage: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
});

export default WelcomeScreen;
