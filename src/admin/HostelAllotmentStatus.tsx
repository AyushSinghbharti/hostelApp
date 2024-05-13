import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import CustomHostelCard from "../Components/CustomHostelCard";
import { dataType } from "../dummyData/dataInterface";
// import hostelData from "../dummyData/hostelData.json";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import CustomHostelCardAdmin from "../Components/CustomHostelCardAdmin";
import { AdminColorTheme } from "../Components/ColorTheme";

const HostelAllotmentSystem = ({ navigation }) => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState<dataType[]>(items);
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (search) {
      const filtered = items.filter((item) =>
        item.hostel_name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredItems(filtered);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [search]);

  useEffect(() => {
    const fetchFromFirebase = async () => {
      const querySnapshot = await getDocs(collection(db, "hostels"));
      const fetchedItems = [];
      querySnapshot.forEach((doc) => {
        fetchedItems.push({ id: doc.id, ...doc.data() });
      });
      setItems((prevItems) => [...prevItems, ...fetchedItems]);
    };

    fetchFromFirebase();
  }, [search]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign
          name="left"
          size={25}
          color="white"
          style={{ marginLeft: 10 }}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerText}>Hostel Allotment System</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Hostel"
          placeholderTextColor="#999"
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
        <TouchableOpacity style={styles.searchButton}>
          <Ionicons name="search" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.hostelList}>
        {filteredItems.length === 0
          ? items.map((item, index) => (
              <CustomHostelCardAdmin key={index} {...item} index={item.index} />
            ))
          : filteredItems.map((item, index) => (
              <CustomHostelCardAdmin key={index} {...item} index={item.index} />
            ))}
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Hostel Allotment System</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AdminColorTheme.background, // Changed
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 25,
    paddingVertical: 10,
    backgroundColor: AdminColorTheme.main, // Changed
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    paddingHorizontal: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginTop: 15,
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginRight: 10,
    fontSize: 16,
    elevation: 3,
  },
  searchButton: {
    backgroundColor: AdminColorTheme.main, // Changed
    padding: 12,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
  hostelList: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: AdminColorTheme.main, // Changed
    marginTop: "auto",
  },
  footerText: {
    color: "#fff",
  },
});

export default HostelAllotmentSystem;
