import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import CustomActivityText from '../Components/CustomActivityText';

const HostelHomePage = () => {
  const image = { uri: 'https://images.unsplash.com/photo-1596276020587-8044fe049813?q=80&w=1878&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
  const scrollViewRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({
          y: 0,
          animated: false,
        });
        scrollViewRef.current.scrollToEnd({
          animated: true,
          duration: 4000, // Adjust duration for slower scrolling
        });
      }
    }, 3000); // Adjust the interval time as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <ImageBackground
      source={image}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Welcome! <Text style={[styles.userName, { fontWeight: '400' }]}>User Name</Text></Text>
          <View style={styles.userInfo}>
            <TouchableOpacity style={styles.notificationButton}>
              <FontAwesome5 name="bell" size={24} color="#333" />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.title}>Hostel Allotment</Text>
        <Text style={styles.subtitle}>Find Your Cozy Corner</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Search Hostels</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Apply for Allotment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Hostel Rules</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Contact Us</Text>
        </TouchableOpacity>
        <View style={styles.activities}>
          <Text style={styles.activitiesTitle}>Popular Activities:</Text>
          <ScrollView showsVerticalScrollIndicator={false} ref={scrollViewRef}>
            <CustomActivityText name="Movie" iconLogo="tv" />
            <CustomActivityText name="Football" iconLogo="football-ball" />
            <CustomActivityText name="Coding event" iconLogo="code" />
            <CustomActivityText name="Snacks" iconLogo="pizza-slice" />

          </ScrollView>
        </View>
      </View>
    </ImageBackground >
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    padding: 20,
    borderRadius: 15,
    width: '90%',
    maxWidth: 400,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: '500',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontSize: 20,
    marginRight: 10,
    color: '#333', // Adjust color for better contrast
  },
  notificationButton: {
    padding: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333', // Adjust color for better contrast
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: '#666', // Adjust color for better contrast
  },
  button: {
    backgroundColor: '#ff6f61',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    marginVertical: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
  activities: {
    // backgroundColor: 'red',
    alignSelf: 'flex-start',
    height: '20%',
    marginTop: 20,
    marginBottom: 10,
  },
  activitiesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333', // Adjust color for better contrast
  },
  activity: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555', // Adjust color for better contrast
  },
  feedbackButton: {
    backgroundColor: '#333',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  feedbackButtonText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default HostelHomePage;