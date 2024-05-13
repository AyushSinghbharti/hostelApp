import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { db } from "../../firebase";
import { collection, setDoc, doc } from "firebase/firestore";
import { studentDataType } from "../dummyData/dataInterface";
import DummyStudentData from "../dummyData/DummyStudentData.json";

const QueryRunningPage = () => {
  //Starting
  let index = 0;
  const handleUpload = () => {
    {
      DummyStudentData.map(async (student) => {
        try {
          const userDocRef = doc(db, "users", student.email);
          await setDoc(userDocRef, {
            branch: student.branch,
            cgpa: student.cgpa,
            email: student.email,
            gender: student.gender,
            guardianAddress: student.guardianAddress,
            guardianContactNumber: student.guardianContactNumber,
            index: index++,
            rollNumber: student.RollNumber,
            studentName: student.studentName,
            mobileNumber: student.mobileNumber,
            year: student.Year,
            hostelAlloted: false,
          });
          console.log("Document written with ID: ", userDocRef.id, index);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      });
      alert("Data updated successfully");
    }
  };

  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Button title="Update data" onPress={handleUpload} />
    </View>
  );
};

export default QueryRunningPage;

const styles = StyleSheet.create({});
