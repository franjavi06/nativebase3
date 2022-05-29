import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomSplash from "./screens/CustomSplash";
import Login from "./screens/Login";
import Home from "./screens/Home";

const Stack = createNativeStackNavigator();

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={CustomSplash} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
