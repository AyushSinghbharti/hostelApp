import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./src/stud/LoginPageStud";
import RegisterPage from "./src/stud/RegisterPageStud";
import StartingPage from "./src/auth/StartingPage";
import HomePage from "./src/stud/HomePage";
import HostelSearch from "./src/stud/HostelSearch";
import UpdateStudentData from "./src/stud/StudentData";
import HostelAllotmentPage from "./src/stud/HostelAllotmentPage";
import LoginPageAdmin from "./src/admin/LoginPageAdmin";
import RegisterPageAdmin from "./src/admin/RegisterPageAdmin";
import HostelHomeAdmin from "./src/admin/HomePageAdmin";
import HostelStatusAdmin from "./src/admin/HostelStatusAdmin";
import AddHostelPage from "./src/admin/AddHostelAdmin";
import StudentDataFetch from "./src/admin/StudentData";
import HostelAllotmentStatus from "./src/admin/HostelAllotmentStatus";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="StartingPage"
          component={StartingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginPageAdmin"
          component={LoginPageAdmin}
          options={{ headerShown: false }}
        />
          <Stack.Screen
            name="RegisterPageAdmin"
            component={RegisterPageAdmin}
            options={{ headerShown: false }}
          /> */}
        <Stack.Screen
          name="HostelHomeAdmin"
          component={HostelHomeAdmin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddHostelPage"
          component={AddHostelPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HostelAllotmentStatus"
          component={HostelAllotmentStatus}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StudentDataFetch"
          component={StudentDataFetch}
          options={{ headerShown: false }}
        />

        {/* Student Side */}
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterPage"
          component={RegisterPage}
          options={{ headerShown: false }}
        />
          <Stack.Screen
            name="HomePage"
            component={HomePage}
            options={{ headerShown: false }}
          />
        <Stack.Screen
          name="HostelSearch"
          component={HostelSearch}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UpdateStudentData"
          component={UpdateStudentData}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HostelAllotmentPage"
          component={HostelAllotmentPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
