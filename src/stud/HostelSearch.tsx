import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import CustomHostelCard from "../Components/CustomHostelCard";
import { dataType } from "../dummyData/dataInterface";
import hostelData from "../dummyData/hostelData.json";

const HostelAllotmentSystem = ({ navigation }) => {
  const items: dataType[] = hostelData;
  const [filteredItems, setFilteredItems] = useState<dataType[]>(hostelData);
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    const filtered = hostelData.filter((item) =>
      item.hostel_name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  useEffect(() => {
    handleSearch();
  }, [search]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <AntDesign name="left" size={25} color="white" style={{marginLeft: 10}} onPress={() => navigation.navigate("HomePage")} />
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
              <CustomHostelCard key={index} {...item} index={item.index} />
            ))
          : filteredItems.map((item, index) => (
              <CustomHostelCard key={index} {...item} index={item.index} />
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
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingTop: 25,
    paddingVertical: 10,
    backgroundColor: "#3366FF",
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
    backgroundColor: "#3366FF",
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
  hostelCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
  },
  hostelImage: {
    width: "100%",
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
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#3366FF",
    marginTop: "auto",
  },
  footerText: {
    color: "#fff",
  },
});

export default HostelAllotmentSystem;
