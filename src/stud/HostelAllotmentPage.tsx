import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Modal,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StudColorTheme } from "../Components/ColorTheme";

const HostelDetailPage = ({ navigation }) => {
  const [feedbackModalVisible, setFeedbackModalVisible] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");

  const handleFeedbackSubmit = () => {
    // Submit feedback to backend or perform necessary action
    setFeedbackModalVisible(false);
    setFeedbackText("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Ionicons
          name="arrow-back"
          size={24}
          color={StudColorTheme.dark}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headingText}>Hostel Detail</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={{
            uri: "https://t4.ftcdn.net/jpg/02/19/66/93/360_F_219669327_v12pBKc7TB62E3uCJrgRRkDhfVENK3z5.jpg",
          }}
          style={styles.image}
          resizeMode="cover"
        />

        <View style={styles.infoContainer}>
          <View style={styles.rowDir}>
            <Text style={styles.hostelName}>Hostel Name</Text>
            <Text style={styles.hostelDetails}>Room Number: 123</Text>
          </View>
          <Text style={styles.hostelDetails}>Allotment Number: ABC123</Text>
          <Text style={styles.hostelDetails}>Address: Hostel Address Here</Text>
        </View>

        {/* <ScrollView showsVerticalScrollIndicator={false} > */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="cash" size={24} color="#333" style={styles.icon} />
            <Text style={styles.sectionTitle}>Fees & Check-in Date</Text>
          </View>
          <Text style={styles.hostelDetails}>
            <Text style={styles.mainText}>Fees Total</Text>: 50000rs
          </Text>
          <Text style={styles.hostelDetails}>
            <Text style={styles.mainText}>Check-in-date</Text>: 10/11/24
          </Text>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons
              name="warning"
              size={24}
              color="#333"
              style={styles.icon}
            />
            <Text style={styles.sectionTitle}>Fines & Fees Due</Text>
          </View>
          <View style={styles.rowDir}>
            <Text style={styles.hostelDetails}>
              <Text style={styles.mainText}>Fees-Due</Text>: {200}
            </Text>

            <Text style={styles.hostelDetails}>
              <Text style={styles.mainText}>Fine</Text>: {0}
            </Text>
          </View>
          <Text style={styles.hostelDetails}>
            <Text style={styles.mainText}>Total</Text>: {200}
          </Text>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons
              name="notifications"
              size={24}
              color="#333"
              style={styles.icon}
            />
            <Text style={styles.sectionTitle}>Important Notices</Text>
          </View>
          <Text style={styles.hostelDetails}>
            <Text style={styles.mainText}>Subject 1</Text>: notice Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Minima quasi dicta
            tenetur culpa iure ab eaque voluptates sunt ea nisi labore iste
            recusandae reprehenderit modi, eveniet enim non dolorum quibusdam.
            Explicabo porro rerum dicta tempora rem hic repellat totam sed autem
            vel. Provident aut dolorum repellat ea dolores velit omnis.
          </Text>
          <Text style={styles.hostelDetails}>
            <Text style={styles.mainText}>Subject 1</Text>: Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Aspernatur nisi eos aperiam
            consectetur et velit dolore libero ullam sapiente! Illum.
          </Text>
        </View>

        <Modal
          visible={feedbackModalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setFeedbackModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TextInput
                placeholder="Type your feedback or complaint here"
                multiline={true}
                numberOfLines={4}
                value={feedbackText}
                onChangeText={(text) => setFeedbackText(text)}
                style={styles.feedbackInput}
              />
              <TouchableOpacity
                onPress={handleFeedbackSubmit}
                style={styles.modalButton}
              >
                <Text style={styles.modalButtonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>

      <TouchableOpacity
        style={styles.feedbackButton}
        onPress={() => setFeedbackModalVisible(true)}
      >
        <Text style={styles.feedbackButtonText}>
          Provide Feedback/Complaint
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StudColorTheme.background,
    paddingHorizontal: 20,
  },
  heading: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight + 10,
    marginBottom: 20,
  },
  headingText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    flex: 1,
    color: StudColorTheme.mainDark,
  },
  rowDir: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  mainText: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "justify",
    color: StudColorTheme.mainDark,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 5,
    borderRadius: 10,
  },
  infoContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
  },
  hostelName: {
    fontSize: 24,
    fontWeight: "bold",
    color: StudColorTheme.dark,
  },
  hostelDetails: {
    fontSize: 14,
    textAlign: "justify",
    marginBottom: 1,
    color: StudColorTheme.dark,
  },
  section: {
    backgroundColor: "#FFF",
    elevation: 3,
    marginBottom: 10,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  sectionTitle: {
    color: StudColorTheme.dark,
    fontSize: 20,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(1, 1, 1, 0.75)",
  },
  modalContent: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 15,
    width: "80%",
  },
  feedbackInput: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  feedbackButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 10,
  },
  feedbackButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  modalButton: {
    width: "100%",
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 10,
    elevation: 7,
  },
  modalButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default HostelDetailPage;
