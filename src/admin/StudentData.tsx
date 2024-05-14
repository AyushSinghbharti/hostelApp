import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Modal,
  Button,
  Platform,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { db } from "../../firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { AdminColorTheme } from "../Components/ColorTheme";

let isWeb = false;

export default function StudentData({ navigation }) {
  const [students, setStudents] = useState([]);
  const [sortedBy, setSortedBy] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  if (Platform.OS === "web") isWeb = true;
  else isWeb = false;

  useEffect(() => {
    const fetchData = async () => {
      const q = query(
        collection(db, "hostelAllotmentList"),
        orderBy("rollNumber")
      );
      const querySnapshot = await getDocs(q);
      const studentData = [];
      querySnapshot.forEach((doc) => {
        studentData.push(doc.data());
      });
      setStudents(studentData);
    };

    fetchData();
  }, []);

  const sortStudents = (sortBy) => {
    let sortedStudents = [...students];
    if (sortBy === "name") {
      sortedStudents.sort((a, b) => a.studentName.localeCompare(b.studentName));
    } else if (sortBy === "rollNumber") {
      sortedStudents.sort((a, b) => a.rollNumber - b.rollNumber);
    } else if (sortBy === "HostelName") {
      sortedStudents.sort((a, b) => a.hostelName.localeCompare(b.hostelName));
    } else if (sortBy === "CGPA") {
      sortedStudents.sort((a, b) => a.cgpa - b.cgpa);
    }

    setStudents(sortedStudents);
    setSortedBy(sortBy);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => showStudentDetails(item)}>
      <View style={styles.item}>
        <View style={{ flexDirection: "row" }}>
          <Text style={[styles.name, { flex: 1 }]}>{item.studentName}</Text>
          <Text style={[styles.info, { fontWeight: "600", fontSize: 12 }]}>
            CGPA:{" "}
            <Text style={{ fontWeight: "300", fontSize: 18 }}>{item.cgpa}</Text>
          </Text>
        </View>
        <Text style={styles.info}>{item.hostelName}</Text>
        <Text style={[styles.info, { fontWeight: "600", fontSize: 12 }]}>
          Roll Number:{" "}
          <Text style={{ fontWeight: "300", fontSize: 18 }}>
            {item.rollNumber}
          </Text>
        </Text>
      </View>
    </TouchableOpacity>
  );

  const showStudentDetails = (student) => {
    setSelectedStudent(student);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false); // Close the modal
  };

  return (
    <View style={[styles.container, { paddingTop: isWeb ? 10 : 30 }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color={AdminColorTheme.main} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Student Data</Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 7,
          }}
        >
          Sort by:
        </Text>
        <View style={styles.sortButtons}>
          <TouchableOpacity onPress={() => sortStudents("name")}>
            <Text style={styles.sortButtonText}>Name</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => sortStudents("HostelName")}>
            <Text style={styles.sortButtonText}>Hostel Name</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => sortStudents("rollNumber")}>
            <Text style={styles.sortButtonText}>Roll Number</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => sortStudents("CGPA")}>
            <Text style={styles.sortButtonText}>CGPA</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={students}
        renderItem={renderItem}
        keyExtractor={(item) => item.rollNumber.studentName}
        style={styles.list}
      />

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {selectedStudent && (
              <View>
                <Text style={styles.modalText}>
                  Student Name: {selectedStudent.studentName}
                </Text>
                <Text style={styles.modalText}>
                  Email: {selectedStudent.email}
                </Text>
                <Text style={styles.modalText}>
                  Roll Number: {selectedStudent.rollNumber}
                </Text>
                <Text style={styles.modalText}>
                  CGPA: {selectedStudent.cgpa}
                </Text>
                <Text style={styles.modalText}>
                  Gender: {selectedStudent.gender}
                </Text>
                <Text style={styles.modalText}>
                  Mobile Number: {selectedStudent.mobileNumber}
                </Text>
                <Text style={styles.modalText}>
                  Guardian Address: {selectedStudent.guardianAddress}
                </Text>
                <Text style={styles.modalText}>
                  Guardian Contact Number:{" "}
                  {selectedStudent.guardianContactNumber}
                </Text>
                <Text style={styles.modalText}>
                  Branch: {selectedStudent.branch}
                </Text>
                <Text style={styles.modalText}>
                  Year: {selectedStudent.year}
                </Text>
                <Text style={styles.modalText}>
                  Hostel Allotted:{" "}
                  {selectedStudent.hostelAlloted ? "Yes" : "No"}
                </Text>
              </View>
            )}
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AdminColorTheme.background,
    paddingTop: 30,
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: AdminColorTheme.main,
  },
  sortButtons: {
    flexDirection: "row",
    marginBottom: 5,
  },
  sortButtonText: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: AdminColorTheme.main,
    borderRadius: 5,
    marginRight: 10,
    color: "#fff",
  },
  list: {
    flex: 1,
  },
  item: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 3,
    shadowColor: AdminColorTheme.dark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: AdminColorTheme.dark,
  },
  info: {
    fontSize: 16,
    marginBottom: 3,
    color: AdminColorTheme.dark,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(144,147,133,0.75)",
  },
  modalContent: {
    backgroundColor: AdminColorTheme.background,
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    shadowColor: AdminColorTheme.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 10,
    fontSize: 16,
    color: AdminColorTheme.dark,
  },
  closeButton: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: AdminColorTheme.dark,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  closeButtonText: {
    color: AdminColorTheme.background,
    fontSize: 16,
  },
  downloadButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
});
