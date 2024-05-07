// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   Modal,
// } from "react-native";
// import { AntDesign, Ionicons } from "@expo/vector-icons";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { app } from "../../firebase";

// const UploadStudentData = ({navigation}) => {
//   const options = ["1st", "2nd", "3rd", "4th"];
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedOption, setSelectedOption] = useState("");

//   const [studentName, setStudentName] = useState("");
//   const [email, setEmail] = useState("");
//   const [cgpa, setCGPA] = useState("");
//   const [branch, setBranch] = useState("");
//   const [year, setYear] = useState("");
//   const [gender, setGender] = useState("");
//   const [mobileNumber, setMobileNumber] = useState("");
//   const [guardianAddress, setGuardianAddress] = useState("");
//   const [guardianContactNumber, setGuardianContactNumber] = useState("");

//   const handleUpload = () => {
//     // Handle Firebase upload here
//   };

//   useEffect(() => {
//     // Fetch data from Firebase here
//     const auth = getAuth(app);
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         const uid = user.uid;
//         setStudentName(user.displayName);
//         setEmail(user.email);
//       } else {
//         setStudentName("UserName");
//         setEmail("Email");
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//     setModalVisible(false);
//   };

//   return (
//     <>
//       <View>
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={modalVisible}
//           onRequestClose={() => setModalVisible(false)}
//         >
//           <View style={styles.modalContainer}>
//             {options.map((option) => (
//               <TouchableOpacity
//                 key={option}
//                 style={styles.option}
//                 onPress={() => handleOptionSelect(option)}
//               >
//                 <Text style={styles.optionText}>{option}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         </Modal>
//       </View>
//       <View style={styles.container}>
//         <View style={styles.heading}>
//           <Ionicons name="arrow-back" size={24} color="black" onPress={() => navigation.goBack()} />
//           <Text style={styles.headingText}>Upload Student Data</Text>
//         </View>
//         <Image
//           source={{
//             uri: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
//           }}
//           style={styles.image}
//         />
//         <Text style={styles.emailText}>{email}</Text>
//         <View style={styles.inputContainer}>
//           <AntDesign name="user" size={24} color="#777" style={styles.icon} />
//           <TextInput
//             style={styles.input}
//             placeholder="Student Name"
//             value={studentName}
//             onChangeText={setStudentName}
//           />
//         </View>
//         <View style={styles.inputContainer}>
//           <AntDesign name="star" size={24} color="#777" style={styles.icon} />
//           <TextInput
//             style={styles.input}
//             placeholder="CGPA"
//             value={cgpa}
//             onChangeText={setCGPA}
//             keyboardType="numeric"
//           />
//         </View>
//         <View style={styles.inputContainer}>
//           <AntDesign name="book" size={24} color="#777" style={styles.icon} />
//           <TextInput
//             style={styles.input}
//             placeholder="Branch"
//             value={branch}
//             onChangeText={setBranch}
//           />
//         </View>
//         <View style={styles.inputContainer}>
//           <AntDesign
//             name="calendar"
//             size={24}
//             color="#777"
//             style={styles.icon}
//           />
//           <TouchableOpacity
//             onPress={() => setModalVisible(true)}
//             style={styles.dropdownButton}
//           >
//             <Text
//               style={{
//                 flex: 1,
//                 width: "100%",
//                 paddingVertical: 10,
//                 paddingHorizontal: 10,
//               }}
//             >
//               {selectedOption || "Select Year"}
//             </Text>
//             <AntDesign name="down" size={16} color="#333" style={styles.icon} />
//           </TouchableOpacity>
//         </View>
//         <View style={styles.inputContainer}>
//           <AntDesign name="man" size={24} color="#777" style={styles.icon} />
//           <TextInput
//             style={styles.input}
//             placeholder="Gender"
//             value={gender}
//             onChangeText={setGender}
//           />
//         </View>
//         <View style={styles.inputContainer}>
//           <AntDesign name="phone" size={24} color="#777" style={styles.icon} />
//           <TextInput
//             style={styles.input}
//             placeholder="Mobile Number"
//             value={mobileNumber}
//             onChangeText={setMobileNumber}
//             keyboardType="phone-pad"
//           />
//         </View>
//         <View style={styles.inputContainer}>
//           <AntDesign name="home" size={24} color="#777" style={styles.icon} />
//           <TextInput
//             style={styles.input}
//             placeholder="Guardian Address"
//             value={guardianAddress}
//             onChangeText={setGuardianAddress}
//             multiline
//           />
//         </View>
//         <View style={styles.inputContainer}>
//           <AntDesign
//             name="contacts"
//             size={24}
//             color="#777"
//             style={styles.icon}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Guardian Contact Number"
//             value={guardianContactNumber}
//             onChangeText={setGuardianContactNumber}
//             keyboardType="phone-pad"
//           />
//         </View>
//         <TouchableOpacity style={styles.uploadButton} onPress={handleUpload}>
//           <Text style={styles.buttonText}>Upload</Text>
//         </TouchableOpacity>
//       </View>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: '100%',
//     justifyContent: "center",
//     alignItems: "center",
//     paddingHorizontal: 20,
//   },
//   heading: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: 'center',
//     paddingBottom: 20,
//   },
//   headingText: {
//     flex: 1,
//     fontSize: 20,
//     fontWeight: "600",
//     textAlign: "center",
//   },
//   image: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     marginBottom: 10,
//     borderColor: "black",
//     borderWidth: 1,
//     resizeMode: "cover",
//   },
//   emailText: {
//     fontSize: 16,
//     fontWeight: "500",
//     marginBottom: 20,
//   },
//   inputContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 10,
//   },
//   icon: {
//     marginRight: 10,
//   },
//   input: {
//     flex: 1,
//     height: 40,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 8,
//     paddingHorizontal: 10,
//   },
//   uploadButton: {
//     backgroundColor: "#007bff",
//     paddingVertical: 12,
//     paddingHorizontal: 30,
//     borderRadius: 20,
//     marginTop: 20,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },

//   container1: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   dropdownButton: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 8,
//     flexDirection: "row",
//     alignItems: "center",
//     width: "90%",
//   },
//   dropdownButtonText: {
//     marginRight: 5,
//   },
//   modalContainer: {
//     backgroundColor: "#fff",
//     borderRadius: 8,
//     padding: 10,
//     marginTop: "auto",
//     marginHorizontal: 20,
//     maxHeight: 200,
//   },
//   option: {
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: "#ccc",
//   },
//   optionText: {
//     fontSize: 16,
//     color: "#333",
//   },
// });

// export default UploadStudentData;

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

const UploadStudentData = ({ navigation }) => {
  const options = ["1st", "2nd", "3rd", "4th"];
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const [studentName, setStudentName] = useState("");
  const [email, setEmail] = useState("");
  const [cgpa, setCGPA] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [gender, setGender] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [guardianAddress, setGuardianAddress] = useState("");
  const [guardianContactNumber, setGuardianContactNumber] = useState("");

  const handleUpload = () => {
    // Handle Firebase upload here
  };

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

    return () => unsubscribe();
  }, []);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setModalVisible(false);
  };

  const renderComponent = () => {
    if (Platform.OS === "web") {
      return <div style={styles.containerWeb}><View style={{width: "80%"}}>{renderContent()}</View></div>;
    } else {
      return <View style={styles.container}>{renderContent()}</View>;
    }
  };

  const renderContent = () => {
    return (
      // <View style={{width: "80%"}}>
      <>
        <View style={styles.heading}>
          <Ionicons
            name="arrow-back"
            size={24}
            color="black"
            onPress={() => navigation.goBack()}
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
            <Text style={styles.dropdownButtonText}>
              {selectedOption || "Select Year"}
            </Text>
            <AntDesign name="down" size={16} color="#333" style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <AntDesign name="man" size={24} color="#777" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Gender"
            value={gender}
            onChangeText={setGender}
          />
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
            {options.map((option) => (
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
    borderColor: "black",
    borderWidth: 1,
    resizeMode: "cover",
    alignSelf: 'center',
  },
  emailText: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
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
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  dropdownButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  dropdownButtonText: {
    flex: 1,
  },
  modalContainer: {
    backgroundColor: "#fff",
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
    borderBottomColor: "#ccc",
  },
  optionText: {
    fontSize: 16,
    color: "#333",
  },
});

export default UploadStudentData;
