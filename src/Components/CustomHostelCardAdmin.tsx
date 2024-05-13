import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { dataType } from "../dummyData/dataInterface";
import { AdminColorTheme } from "./ColorTheme";
import {
  collection,
  where,
  getDocs,
  query,
  doc,
  setDoc,
} from "firebase/firestore";
import { db } from "../../firebase";

const CustomHostelCard = (props) => {
  const item: dataType = props;
  const index = props.index;
  let indexForStudent = 0;
  const highCGPAStudents = [];
  // const handleSubmit = async ({hostel}) => {{
  //     try {
  //       const docRef = doc(db, "hostelAlloted", hostelName);
  //       await setDoc(docRef, {
  //         cgpa: cgpa,
  //         hostelName: hostelName,
  //         allotment: allotment,
  //         vacancy: vacancy,
  //         address: address,
  //         image: base64image,
  //         phoneNumber: phoneNumber,
  //         rating: rating,
  //         amenities: amenities,
  //         reviews: reviews,
  //       });
  //       console.log(docRef);
  //       console.log("Document written with ID: ", docRef.id);
  //       alert(`Hostel added successfully, ${docRef.id}`);
  //     } catch (e) {
  //       alert(e.message);
  //       console.error("Error adding document: ", e);
  //     }
  // };

  const uploadStudentList = async () => {
    let count = 0;
    highCGPAStudents.map(async (student) => {
      try {
        const userDocRef = doc(db, "hostelAllotmentList", student.email);
        await setDoc(userDocRef, {
          branch: student.branch,
          cgpa: student.cgpa,
          email: student.email,
          gender: student.gender,
          guardianAddress: student.guardianAddress,
          guardianContactNumber: student.guardianContactNumber,
          index: indexForStudent++,
          rollNumber: student.rollNumber,
          studentName: student.studentName,
          mobileNumber: student.mobileNumber,
          year: student.year,
          hostelAlloted: true,
          hostelName: item.hostelName,
        });
        count++;
        if (count >= item.vacancy) return;

        const hotelDocs = doc(db, "hostels", item.hostelName);
        await setDoc(hotelDocs, {
          hostelName: item.hostelName,
          address: item.address,
          allotment: item.allotment,
          amenities: item.amenities,
          cgpa: item.cgpa,
          image: item.image,
          phoneNumber: item.phoneNumber,
          rating: item.rating,
          reviews: item.reviews,
          vacancy: item.vacancy-count,
        });

        console.log("Document written with ID: ", userDocRef.id, index);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    });
    alert("Data updated successfully");
  };

  const getHighCGPAStudents = async () => {
    const studentsRef = collection(db, "users");
    console.log(typeof item.cgpa);
    const q = query(
      studentsRef,
      where("cgpa", ">=", item.cgpa),
      where("hostelAlloted", "==", false),
      where("gender", "==", "Male")
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        highCGPAStudents.push(doc.data());
      });
      console.log("High CGPA Students: ", highCGPAStudents);
      uploadStudentList();
      return highCGPAStudents;
    } catch (e) {
      console.error("Getting Error: ", e.message);
      return [];
    }
  };

  return (
    <View style={styles.hostelCard}>
      <Image
        source={{
          uri: `data:image/jpeg;base64,${item.image}`,
        }}
        style={styles.hostelImage}
      />
      <View style={styles.hostelDetails}>
        <Text style={styles.hostelName}>
          {item.hostelName} Hostel{"\n"}
          <Text style={{ fontSize: 14, fontWeight: "400" }}>
            {item.address}
          </Text>
        </Text>
        <View style={styles.infoRow}>
          <Ionicons name="people" size={20} color={AdminColorTheme.mainDark} />
          <Text style={styles.hostelInfo}>Capacity: {item.allotment}</Text>
        </View>
        <View
          style={[
            styles.infoRow,
            { justifyContent: "space-between", paddingRight: 5 },
          ]}
        >
          <View style={{ flexDirection: "row" }}>
            <Ionicons name="bed" size={20} color={AdminColorTheme.mainDark} />
            <Text style={styles.hostelInfo}>Vacancy: {item.vacancy}</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 5 }}>
            <FontAwesome5
              name="graduation-cap"
              size={20}
              color={AdminColorTheme.mainDark}
            />
            <Text>{item.cgpa}</Text>
          </View>
        </View>
        <View style={[styles.infoRow]}>
          <Ionicons name="star" size={20} color={AdminColorTheme.mainDark} />
          <Text style={styles.hostelInfo}>
            Rating: {item.rating} <Text style={{ fontSize: 12 }}>/5</Text>
          </Text>
          <TouchableOpacity
            style={{ right: 0, marginRight: 10, position: "absolute" }}
          >
            <MaterialCommunityIcons
              name="web"
              size={24}
              color={AdminColorTheme.mainDark}
            />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.bookButton} onPress={getHighCGPAStudents}>
        <Text style={styles.bookButtonText}>Allotte Hostel</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomHostelCard;

const styles = StyleSheet.create({
  hostelCard: {
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 20,
    elevation: 5,
  },
  hostelImage: {
    resizeMode: "cover",
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  hostelDetails: {
    padding: 15,
  },
  hostelName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: AdminColorTheme.dark,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  hostelInfo: {
    marginLeft: 5,
    fontSize: 16,
    color: AdminColorTheme.mainDark,
  },
  bookButton: {
    borderRadius: 10,
    marginHorizontal: 15,
    marginBottom: 15,
    paddingVertical: 12,
    alignItems: "center",
    backgroundColor: AdminColorTheme.dark,
  },
  bookButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
