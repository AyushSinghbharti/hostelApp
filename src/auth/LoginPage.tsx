import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import CustomInput from "../Components/CustomInput";
import CustomButton from "../Components/CustomButton";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../../firebase";

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const loginUser = async () => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("Logged in succesfully :) ");
        navigation.navigate("HomePage");
        console.log(user);
      })
      .catch((error) => {
        console.log(error.code, error.message);
        if (error.code === "auth/email-already-in-use") {
          alert("Email is already in use");
        } else alert(error);
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login to your account</Text>
      <Text style={styles.subHeading}>Please sign in to your account </Text>
      <View style={{ paddingBottom: 15 }}>
        <CustomInput
          label={"Email Address"}
          placeholder={"Enter email"}
          isPassword={false}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={{ paddingBottom: 15 }}>
        <CustomInput
          label={"Password"}
          placeholder={"Enter Password"}
          isPassword={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <Text
        style={styles.forgetPassword}
        onPress={() => {
          navigation.navigate("RegisterPage");
        }}
      >
        Forgot Password?
      </Text>
      <CustomButton title={"Login"} onPress={loginUser} />

      <View style={styles.dividerHeading}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>Or sign in with</Text>
        <View style={styles.divider} />
      </View>

      <TouchableOpacity style={styles.googleLogo} onPress={() => {}}>
        <Image
          source={{ uri: "https://pngimg.com/d/google_PNG19635.png" }}
          style={{ height: 40, width: 40 }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.footer}
        onPress={() => {
          navigation.navigate("RegisterPage");
        }}
      >
        <Text style={styles.footerText}>
          Don't Have an account?{" "}
          <Text style={styles.innerfooterText}>Register</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // top: 76,
    paddingTop: StatusBar.currentHeight + 20 || 50,
    flex: 1,
    paddingHorizontal: 15,
  },
  heading: {
    fontSize: 34,
    width: 327,
    height: 80,
    fontWeight: "600",
  },
  subHeading: {
    marginTop: 10,
    marginBottom: 32,
    fontSize: 14,
    fontWeight: "500",
    color: "#878787",
  },
  forgetPassword: {
    textAlign: "right",
    marginBottom: 20,
    color: "#FE8C00",
    fontWeight: "500",
    fontSize: 15,
  },
  dividerHeading: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 26,
    gap: 16,
  },
  divider: {
    flex: 1,
    borderColor: "#878787",
    height: 0,
    borderWidth: 0.5,
  },
  dividerText: {
    color: "#878787",
    fontSize: 14,
    fontWeight: "500",
  },
  googleLogo: {
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    marginTop: 24, //32
    alignSelf: "center",
    height: 50,
    width: 50,
    overflow: "visible",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#D6D6D6",
  },
  footer: {
    marginTop: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    fontSize: 14,
    fontWeight: "500",
  },
  innerfooterText: {
    color: "#FE8C00",
    fontSize: 15,
    fontWeight: "700",
  },
});

export default LoginPage;
