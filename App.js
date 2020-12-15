import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./components/Navigation";
const theme = {
  light: {
    mainColor: "#54601A",
    // backgroundColor: "#f1f1f1",
    backgroundColor: "#ededed",
    redShade: "#9a4332",
    red: "#9a4332",
  },
  dark: {
    mainColor: "#e0e0e0",
    backgroundColor: "black",
    redShade: "#e0e0e0",
    red: "#ff3232",
  },
};
export default function App() {
  return (
    <ThemeProvider theme={theme.light}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>

      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
