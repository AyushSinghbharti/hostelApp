import React, { useRef, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native';
import { FontAwesome5, FontAwesome6, Feather, AntDesign } from '@expo/vector-icons';
import CustomActivityText from '../Components/CustomActivityText';
import { app } from '../../firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { StudColorTheme } from '../Components/ColorTheme';

const HostelHomePage = ({ navigation }) => {
  const image = { uri: 'https://images.unsplash.com/photo-1596276020587-8044fe049813?q=80&w=1878&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUsername(user.displayName);
      }
      else {
        setUsername("userName");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <ImageBackground
      source={image}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Welcome! <Text style={[styles.userName, { fontWeight: '400' }]}>{username}</Text></Text>
          <View style={styles.userInfo}>
            <TouchableOpacity style={styles.notificationButton}>
              <FontAwesome5 name="bell" size={24} color={StudColorTheme.dark} />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.title}>Hostel Allotment</Text>
        <Text style={styles.subtitle}>Find Your Cozy Corner</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("UpdateStudentData")}>
          <Feather name="user" size={24} color="white" />
          <Text style={styles.buttonText}>Update student Data</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("HostelAllotmentPage")}>
          <AntDesign name="form" size={24} color="white" />
          <Text style={styles.buttonText}>Check your hostel Status</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("HostelSearch")}>
          <FontAwesome5 name="building" size={24} color="white" />
          <Text style={styles.buttonText}>Search Hostel Detail</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <FontAwesome6 name="contact-card" size={24} color="white" />
          <Text style={styles.buttonText}>Contact Us</Text>
        </TouchableOpacity>
        <View style={styles.activities}>
          <Text style={styles.activitiesTitle}>Popular Activities:</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <CustomActivityText name="Movie" iconLogo="tv" textColor={StudColorTheme.dark} iconColor={StudColorTheme.main} />
            <CustomActivityText name="Football" iconLogo="football-ball" textColor={StudColorTheme.dark} iconColor={StudColorTheme.main} />
            <CustomActivityText name="Coding event" iconLogo="code" textColor={StudColorTheme.dark} iconColor={StudColorTheme.main} />
            <CustomActivityText name="Snacks" iconLogo="pizza-slice" textColor={StudColorTheme.dark} iconColor={StudColorTheme.main} />

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
    // backgroundColor: 'rgba(255, 255, 255, 0.75)',
    backgroundColor: StudColorTheme.background + Math.round(0.8 * 255).toString(16).toUpperCase(),
    padding: 20,
    borderRadius: 20,
    width: '90%',
    maxWidth: 400,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  welcomeText: {
    color: StudColorTheme.dark,
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
    color: StudColorTheme.main,
  },
  notificationButton: {
    padding: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: StudColorTheme.dark, // Adjust color for better contrast
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: StudColorTheme.mainDark,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: StudColorTheme.dark,
    elevation: 5,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    marginVertical: 8,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
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
    color: StudColorTheme.dark,
  },
});

export default HostelHomePage;