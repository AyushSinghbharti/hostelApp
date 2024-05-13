import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { AdminColorTheme } from "../Components/ColorTheme";
import { addDoc, collection, setDoc, doc } from "firebase/firestore";
import { app, db } from "../../firebase";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { Feather } from "@expo/vector-icons";

const AddHostelForm = ({ navigation }) => {
  const [cgpa, setCGPA] = useState("");
  const [hostelName, setHostelName] = useState("");
  const [allotment, setAllotment] = useState("");
  const [vacancy, setVacancy] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [rating, setRating] = useState("");
  const [amenities, setAmenities] = useState("");
  const [reviews, setReviews] = useState("");
  const [image, setImage] = useState(null);
  const [base64image, setBase64Image] = useState(null);

  const handleSubmit = async () => {
    if (
      cgpa === "" ||
      hostelName === "" ||
      allotment === "" ||
      vacancy === "" ||
      address === "" ||
      phoneNumber === "" ||
      rating === "" ||
      amenities === "" ||
      reviews === ""
    ) {
      alert("Please fill all the fields");
    } else {
      try {
        const docRef = doc(db, "hostels", hostelName);
        await setDoc(docRef, {
          cgpa: parseInt(cgpa),
          hostelName: hostelName,
          allotment: parseInt(allotment),
          vacancy: parseInt(vacancy),
          address: address,
          image: base64image,
          phoneNumber: phoneNumber,
          rating: parseInt(rating),
          amenities: amenities,
          reviews: parseInt(reviews),
        });
        console.log(docRef);
        console.log("Document written with ID: ", docRef.id);
        alert(`Hostel added successfully, ${docRef.id}`);
      } catch (e) {
        alert(e.message);
        console.error("Error adding document: ", e);
      }
    }
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      const base64 = await FileSystem.readAsStringAsync(result.assets[0].uri, {
        encoding: FileSystem.EncodingType.Base64,
      });
      setImage(result.assets[0].uri);
      setBase64Image(base64);
      console.log(image);
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "baseline",
          width: "100%",
          justifyContent: "center",
          position: "absolute",
          top: 40,
        }}
      >
        <AntDesign
          name="arrowleft"
          size={24}
          color={AdminColorTheme.dark}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.heading}>Add New Hostel Detail</Text>
      </View>
      <TouchableOpacity onPress={pickImage}>
        <Image
          // source={{ uri: image }}
          source={{ uri: `data:image/jpeg;base64,${base64image}` }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 20,
            marginBottom: 10,
            borderWidth: 1,
            borderColor: AdminColorTheme.mainDark,
          }}
        />
        <Feather
          name="camera"
          size={20}
          color="white"
          style={{
            backgroundColor: AdminColorTheme.darkBackground,
            borderRadius: 20,
            borderColor: AdminColorTheme.mainDark,
            // borderWidth: 0.5,
            alignSelf: "center",
            padding: 5,
            position: "absolute",
            bottom: 10,
            right: -10,
          }}
        />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Hostel Name"
        value={hostelName}
        onChangeText={setHostelName}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="CGPA to Enter"
        value={cgpa}
        onChangeText={setCGPA}
      />
      <TextInput
        style={styles.input}
        placeholder="Allotment"
        value={allotment}
        onChangeText={setAllotment}
      />
      <TextInput
        style={styles.input}
        placeholder="Vacancy"
        value={vacancy}
        onChangeText={setVacancy}
      />
      <TextInput
        style={styles.input}
        placeholder="Reviews"
        value={reviews}
        onChangeText={setReviews}
      />
      <TextInput
        style={styles.input}
        placeholder="Rating"
        value={rating}
        onChangeText={setRating}
      />
      <TextInput
        style={styles.input}
        placeholder="Amenities"
        value={amenities}
        onChangeText={setAmenities}
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        {/* <TouchableOpacity style={styles.submitButton} onPress={pickImage}> */}
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: AdminColorTheme.background,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    flex: 1,
    textAlign: "center",
    color: AdminColorTheme.main,
  },
  input: {
    width: "100%",
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: AdminColorTheme.mainDark,
    backgroundColor: "white",
  },
  submitButton: {
    // position: "absolute",
    // bottom: 50,
    backgroundColor: AdminColorTheme.main,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});

export default AddHostelForm;
