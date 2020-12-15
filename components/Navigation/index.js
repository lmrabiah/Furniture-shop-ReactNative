//components
import Home from "../Home";
import StoreDetail from "../StoreDetail";
import AllStores from "../AllStores";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <>
      <Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTintColor: "#f1f1f1",
          headerStyle: {
            backgroundColor: "#9a4332",
          },
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Screen
          name="StoreDetail"
          component={StoreDetail}
          options={({ route }) => {
            const { store } = route.params;
            return {
              title: store.name,
            };
          }}
        />
        <Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Screen
          name="AllStores"
          component={AllStores}
          options={{ title: "Choose a Bakery" }}
        />
      </Navigator>
    </>
  );
};

export default RootNavigator;
