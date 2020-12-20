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

function Signup({ navigation }) {
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    await authStore.signup(user);
    console.log("Signup", user);
    if (authStore.user) navigation.navigate("AllStores");
  };

  return (
    <AuthContainer>
      <AuthTitle>Signup</AuthTitle>

      <AuthTextInput
        // iput ... bczn setUser will change the user that is = pass and username if i put in text box  of password onchange with out ... i will seve tha password on user but if i make on the other text box  setUser username it will not have any pass will only save pass + user

        onChangeText={(username) => setUser({ ...user, username })}
        placeholderTextColor="#A6AEC1"
        autoCapitalize="none"
        placeholder="Username"
      ></AuthTextInput>

      <AuthTextInput
        onChangeText={(password) => setUser({ ...user, password })}
        placeholder="Password"
        autoCapitalize="none"
        placeholderTextColor="#A6AEC1"
        secureTextEntry={true}
      />
      <AuthTextInput
        onChangeText={(firstName) => setUser({ ...user, firstName })}
        placeholder="firstName"
        autoCapitalize="none"
        placeholderTextColor="#A6AEC1"
      />
      <AuthTextInput
        onChangeText={(lastName) => setUser({ ...user, lastName })}
        placeholder="lastName"
        autoCapitalize="none"
        placeholderTextColor="#A6AEC1"
      />
      <AuthTextInput
        onChangeText={(email) => setUser({ ...user, email })}
        placeholder="email"
        autoCapitalize="none"
        placeholderTextColor="#A6AEC1"
      />

      <AuthButton>
        <AuthButtonText onPress={handleSubmit}>Sign up</AuthButtonText>
      </AuthButton>
    </AuthContainer>
  );
}

export default observer(Signup);
