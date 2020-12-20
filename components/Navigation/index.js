import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
//components
import CartList from "../CartList";
import Home from "../Home";
import StoreDetail from "../StoreDetail";
import AllStores from "../AllStores";

import CartButton from "../buttons/CartButton";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
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
        <Screen name="Home" component={Home} options={{ headerShown: false }} />

        <Screen
          name="AllStores"
          component={AllStores}
          options={{
            title: "Choose a Bakery",
            headerRight: () => <CartButton />,
          }}
        />

        <Screen
          name="StoreDetail"
          component={StoreDetail}
          options={({ route }) => {
            const { store } = route.params;
            return {
              title: store.name,
              headerRight: () => <CartButton />,
            };
          }}
        />

        <Screen name="Cart" component={CartList} />
        <Screen
          name="Signin"
          component={Signin}
          options={{ headerShown: false }}
        />
        <Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
      </Navigator>
    </>
  );
};

export default RootNavigator;
