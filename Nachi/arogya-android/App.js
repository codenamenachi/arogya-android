// import { StatusBar } from "expo-status-bar";

import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const navTheme = DefaultTheme;
navTheme.colors.background = "#86d8b4";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Arogya" component={LandingPage} />
      </Stack.Navigator>
    </NavigationContainer>
    // <LandingPage />
  );
}
