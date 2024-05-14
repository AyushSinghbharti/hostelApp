import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
  Platform,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../firebase";
import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { StudColorTheme } from "../Components/ColorTheme";

const UploadStudentData = ({ navigation }) => {
  const yearOption = ["1st", "2nd", "3rd", "4th"];
  const genderOption = ["Male", "Female", "Other"];
  const [modalVisible, setModalVisible] = useState(false);
  const [genderModalVisible, setGenderModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [user, setUser] = useState({});
  const [selectedGenderOption, setSelectedGenderOption] = useState("Gender");
  const [studentName, setStudentName] = useState("");
  const [email, setEmail] = useState("");
  const [cgpa, setCGPA] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("Select Year");
  const [gender, setGender] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [guardianAddress, setGuardianAddress] = useState("");
  const [guardianContactNumber, setGuardianContactNumber] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [hostelAllotmentStatus, setHostelAllotmentStatus] = useState(false);

  useEffect(() => {
    // Fetch data from Firebase here
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setStudentName(user.displayName);
        setEmail(user.email);
      } else {
        setStudentName("UserName");
        setEmail("Email");
      }
    });

    const fetchUserData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users", email));
        querySnapshot.forEach((doc) => {
          setUser(doc.data());
          const userData = doc.data();
          setYear(userData.year || "");
          setGender(userData.gender || "gender");
          setSelectedGenderOption(userData.gender || "gender");
          setCGPA(userData.cgpa.toString() || "");
          setBranch(userData.branch || "");
          setMobileNumber(userData.mobileNumber.toString() || "");
          setGuardianAddress(userData.guardianAddress || "");
          setGuardianContactNumber(userData.guardianContactNumber || "");
          setRollNumber(userData.rollNumber.toString() || "");
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
    return () => unsubscribe();
  }, []);

  const handleUpload = async () => {
    // Handle Firebase upload here
    setYear(selectedOption);
    console.log(selectedOption);
    try {
      const userDocRef = doc(db, "users", email);
      await setDoc(userDocRef, {
        studentName: studentName,
        email: email,
        cgpa: parseInt(cgpa),
        branch: branch,
        year: selectedOption,
        gender: selectedGenderOption,
        mobileNumber: parseInt(mobileNumber),
        guardianAddress: guardianAddress,
        guardianContactNumber: guardianContactNumber,
        hostelAlloted: hostelAllotmentStatus,
        rollNumber: parseInt(rollNumber),
      });
      alert("Data uploaded successfully");
      navigation.goBack();
      console.log("Document written with ID: ", userDocRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setModalVisible(false);
  };

  const renderComponent = () => {
    if (Platform.OS === "web") {
      return (
        <div style={styles.containerWeb}>
          <View style={{ width: "80%" }}>{renderContent()}</View>
        </div>
      );
    } else {
      return <View style={styles.container}>{renderContent()}</View>;
    }
  };

  const renderContent = () => {
    return (
      <>
        <View style={styles.heading}>
          <Ionicons
            name="arrow-back"
            size={24}
            color={StudColorTheme.dark}
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Text style={styles.headingText}>Upload Student Data</Text>
        </View>
        <Image
          source={{
            uri: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
          }}
          style={styles.image}
        />
        <Text style={styles.emailText}>{email}</Text>
        <View style={styles.inputContainer}>
          <AntDesign name="user" size={24} color="#777" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Student Name"
            value={studentName}
            onChangeText={setStudentName}
          />
        </View>
        <View style={styles.inputContainer}>
          <AntDesign name="user" size={24} color="#777" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Roll Number"
            value={rollNumber}
            onChangeText={setRollNumber}
            keyboardType="number-pad"
          />
        </View>
        <View style={styles.inputContainer}>
          <AntDesign name="star" size={24} color="#777" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="CGPA"
            value={cgpa}
            onChangeText={setCGPA}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputContainer}>
          <AntDesign name="book" size={24} color="#777" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Branch"
            value={branch}
            onChangeText={setBranch}
          />
        </View>
        <View style={styles.inputContainer}>
          <AntDesign
            name="calendar"
            size={24}
            color="#777"
            style={styles.icon}
          />
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles.dropdownButton}
          >
            <View style={styles.dropdownButtonText}>
              <Text>{selectedOption || year}</Text>
            </View>
            <AntDesign name="down" size={16} color="#333" style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <AntDesign name="man" size={24} color="#777" style={styles.icon} />
          <TouchableOpacity
            onPress={() => setGenderModalVisible(true)}
            style={styles.dropdownButton}
          >
            <View style={styles.dropdownButtonText}>
              <Text>{selectedGenderOption}</Text>
            </View>
            <AntDesign name="down" size={16} color="#333" style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <AntDesign name="phone" size={24} color="#777" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            value={mobileNumber}
            onChangeText={setMobileNumber}
            keyboardType="phone-pad"
          />
        </View>
        <View style={styles.inputContainer}>
          <AntDesign name="home" size={24} color="#777" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Guardian Address"
            value={guardianAddress}
            onChangeText={setGuardianAddress}
            multiline
          />
        </View>
        <View style={styles.inputContainer}>
          <AntDesign
            name="contacts"
            size={24}
            color="#777"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Guardian Contact Number"
            value={guardianContactNumber}
            onChangeText={setGuardianContactNumber}
            keyboardType="phone-pad"
          />
        </View>
        <TouchableOpacity style={styles.uploadButton} onPress={handleUpload}>
          <Text style={styles.buttonText}>Upload</Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            {yearOption.map((option) => (
              <TouchableOpacity
                key={option}
                style={styles.option}
                onPress={() => handleOptionSelect(option)}
              >
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={genderModalVisible}
          onRequestClose={() => setGenderModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            {genderOption.map((option) => (
              <TouchableOpacity
                key={option}
                style={styles.option}
                onPress={() => {
                  setSelectedGenderOption(option); // Update selectedGenderOption here
                  setGenderModalVisible(false); // Close the modal after selection
                }}
              >
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Modal>
      </>
      // </View>
    );
  };

  return renderComponent();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  containerWeb: {
    padding: 20,
    display: "flex",
    backgroundColor: StudColorTheme.background,
    flex: 1,
    flexDirection: "column",
    marginHorizontal: 20,
    alignItems: "center",
  },
  heading: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
  },
  headingText: {
    color: StudColorTheme.mainDark,
    flex: 1,
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    borderWidth: 1,
    resizeMode: "cover",
    alignSelf: "center",
    borderColor: StudColorTheme.mainDark,
  },
  emailText: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 20,
    textAlign: "center",
    color: StudColorTheme.dark,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    justifyContent: "center",
  },
  icon: {
    marginRight: 10,
    color: StudColorTheme.dark,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: StudColorTheme.main,
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  uploadButton: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  dropdownButton: {
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderColor: StudColorTheme.main,
    backgroundColor: "white",
  },
  dropdownButtonText: {
    flex: 1,
  },
  modalContainer: {
    backgroundColor: "#fff",
    borderColor: StudColorTheme.main,
    borderBottomWidth: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderWidth: 0.5,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: "auto",
    marginHorizontal: 20,
    maxHeight: 200,
  },
  option: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: StudColorTheme.mainDark,
  },
  optionText: {
    color: StudColorTheme.dark,
    fontSize: 16,
  },
});

export default UploadStudentData;
