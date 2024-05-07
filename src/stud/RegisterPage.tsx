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
import { Feather } from "@expo/vector-icons";

const RegisterPage = ({ navigation }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create your new account</Text>
      <Text style={styles.subHeading}>
        Create an account to start looking for the food you like{" "}
      </Text>
      <CustomInput
        label={"Email Address"}
        placeholder={"Enter email"}
        isPassword={false}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <CustomInput
        label={"User Name"}
        placeholder={"Enter Username"}
        isPassword={false}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <CustomInput
        label={"Password"}
        placeholder={"Enter Password"}
        isPassword={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity
        onPress={() => setToggleCheckBox(!toggleCheckBox)}
        style={{
          flexDirection: "row",
          marginBottom: 16,
          marginTop: 5,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {toggleCheckBox === true ? (
          <View style={styles.checkBoxBordertrue}>
            <Feather name="check" size={18} color="white" />
          </View>
        ) : (
          <View style={styles.checkBoxBorderfalse} />
        )}
        <Text style={styles.AgreementText}>
          I Agree with{" "}
          <Text style={styles.innerfooterText}>Terms of Service</Text> and{" "}
          <Text style={styles.innerfooterText}>Privacy Policy</Text>{" "}
        </Text>
      </TouchableOpacity>
      <CustomButton title={"Sign In"} onPress={() => {}} />

      <View style={styles.dividerHeading}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>Or sign in with</Text>
        <View style={styles.divider} />
      </View>

      <TouchableOpacity
        style={styles.googleLogo}
        onPress={() => {
          alert("Google login");
        }}
      >
        <Image
          source={{ uri: "https://pngimg.com/d/google_PNG19635.png" }}
          style={{ height: 40, width: 40 }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.footer}
        onPress={() => {
          navigation.navigate("LoginPage");
        }}
      >
        <Text style={styles.footerText}>
          Already have an account?{" "}
          <Text style={styles.innerfooterText}>SignIn</Text>
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
    marginBottom: 24,
    fontSize: 14,
    fontWeight: "500",
    color: "#878787",
  },
  checkBoxBordertrue: {
    height: 20,
    width: 20,
    borderRadius: 5,
    backgroundColor: "#FE8C00",
    justifyContent: "center",
    alignItems: "center",
  },
  checkBoxBorderfalse: {
    height: 20,
    width: 20,
    borderRadius: 5,
    borderColor: "#FE8C00",
    borderWidth: 1.5,
  },
  AgreementText: {
    paddingLeft: 4,
    paddingHorizontal: 16,
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
    marginTop: 24,
    alignSelf: "center",
    height: 50,
    width: 50,
    overflow: "visible",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#D6D6D6",
  },
  footer: {
    marginTop: 24,
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

export default RegisterPage;
