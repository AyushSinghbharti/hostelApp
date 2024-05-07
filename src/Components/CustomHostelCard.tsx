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
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { dataType } from "../dummyData/dataInterface";

const words = [
  "hostel",
  "dorms",
  "accommodation",
  "residence",
  "rooms",
  "college",
  "boarding",
  "lodging",
  "housing",
  "apartment",
  "university",
  "campus",
  "home",
  "house",
  "dormitory",
  "facilities",
  "study",
  "student",
  "dormitory",
  "hostelling",
  "bedroom",
  "hall",
  "rent",
];

function generateRandomIndex() {
  const randomIndex = Math.floor(Math.random() * words.length);
  const randomWord = words[randomIndex];
  const randomWordsArray = [randomWord];
  return randomWordsArray;
}

const CustomHostelCard = (props) => {
  const item: dataType = props;
  const index = props.index;
  {
    console.log(item.images);
  }
  return (
    <View style={styles.hostelCard}>
      <Image
        source={{
          uri: item.images + words[index % words.length],
        }}
        style={styles.hostelImage}
      />
      <View style={styles.hostelDetails}>
        <Text style={styles.hostelName}>
          {item.hostel_name} Hostel{"\n"}
          <Text style={{ fontSize: 14, fontWeight: "400" }}>
            {item.address}
          </Text>
        </Text>
        <View style={styles.infoRow}>
          <Ionicons name="people" size={20} color="#3366FF" />
          <Text style={styles.hostelInfo}>Capacity: 3000</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="bed" size={20} color="#3366FF" />
          <Text style={styles.hostelInfo}>Vacancy: {item.vacancy}</Text>
        </View>
        <View style={[styles.infoRow, {}]}>
          <Ionicons name="calendar" size={20} color="#3366FF" />
          <Text style={styles.hostelInfo}>Check-in: {item.reviews}</Text>
          <TouchableOpacity
            style={{ right: 0, marginRight: 10, position: "absolute" }}
          >
            <MaterialCommunityIcons name="web" size={24} color="#3366ff" />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.bookButton}>
        <Text style={styles.bookButtonText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomHostelCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    paddingVertical: 20,
    backgroundColor: "#3366FF",
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 25,
    marginRight: 10,
    fontSize: 16,
    elevation: 3,
  },
  searchButton: {
    backgroundColor: "#3366FF",
    padding: 12,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
  hostelList: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  hostelCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
  },
  hostelImage: {
    resizeMode: "cover",
    // width: "100%",
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
    color: "#333",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  hostelInfo: {
    marginLeft: 5,
    fontSize: 16,
    color: "#666",
  },
  bookButton: {
    backgroundColor: "#3366FF",
    borderRadius: 10,
    marginHorizontal: 15,
    marginBottom: 15,
    paddingVertical: 12,
    alignItems: "center",
  },
  bookButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  footer: {
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#3366FF",
    marginTop: "auto",
  },
  footerText: {
    color: "#fff",
  },
});
