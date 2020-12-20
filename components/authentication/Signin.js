import React from "react";
import { observer } from "mobx-react";
import {
  AuthContainer,
  AuthTitle,
  AuthTextInput,
  AuthButton,
  AuthButtonText,
  AuthOther,
} from "../../styles";
import { useState } from "react";
import { TextInput } from "react-native";
import authStore from "../../stores/authStore";

function Signin({ navigation }) {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = async () => {
    await authStore.signin(user);
    console.log("Signin", user);
    if (authStore.user) navigation.replace("AllStores");
  };

  return (
    <AuthContainer>
      <AuthTitle>Signin</AuthTitle>

      <AuthTextInput
        // iput ... bczn setUser will change the user that is = pass and username if i put in text box  of password onchange with out ... i will seve tha password on user but if i make on the other text box  setUser username it will not have any pass will only save pass + user
        autoCapitalize="none"
        onChangeText={(username) => setUser({ ...user, username })}
        placeholderTextColor="#A6AEC1"
        placeholder="Username"
      ></AuthTextInput>

      <AuthTextInput
        onChangeText={(password) => setUser({ ...user, password })}
        placeholder="Password"
        placeholderTextColor="#A6AEC1"
        secureTextEntry={true}
      />
      <AuthButton>
        <AuthButtonText onPress={handleSubmit}>Sign in</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.navigate("Signup")}>
        Click here to register!
      </AuthOther>
    </AuthContainer>
  );
}

export default observer(Signin);
