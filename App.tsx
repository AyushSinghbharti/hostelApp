import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./src/stud/LoginPageStud";
import RegisterPage from "./src/stud/RegisterPageStud";
import StartingPage from "./src/auth/StartingPage";
import HomePage from "./src/stud/HomePage";
import HostelSearch from "./src/stud/HostelSearch";
import StudentData from "./src/stud/StudentData";
import HostelAllotmentPage from "./src/stud/HostelAllotmentPage";
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="StartingPage"
          component={StartingPage}
          options={{ headerShown: false }}
        />
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
          name="StudentData"
          component={StudentData}
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
