import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components";
import AllStores from "./components/AllStores";
//components
import Home from "./components/Home";
import StoreDetail from "./components/StoreDetail";

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
    <>
      <View style={styles.container}>
        <ThemeProvider theme={theme.light}>
          {/* <Home /> */}
          {/* <AllStores /> */}
          <StoreDetail />
        </ThemeProvider>
        {/* <Text>Open up App.js to start working on your app!</Text> */}
        <StatusBar style="auto" />
      </View>
    </>
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
