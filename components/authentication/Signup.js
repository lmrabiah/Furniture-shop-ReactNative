import React from "react";
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

function Signup() {
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleSubmit = () => {
    console.log("Signup", user);
  };
  return (
    <AuthContainer>
      <AuthTitle>Signup</AuthTitle>

      <AuthTextInput
        // iput ... bczn setUser will change the user that is = pass and username if i put in text box  of password onchange with out ... i will seve tha password on user but if i make on the other text box  setUser username it will not have any pass will only save pass + user
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
      <AuthTextInput
        onChangeText={(firstName) => setUser({ ...user, firstName })}
        placeholder="firstName"
        placeholderTextColor="#A6AEC1"
      />
      <AuthTextInput
        onChangeText={(lastName) => setUser({ ...user, lastName })}
        placeholder="lastName"
        placeholderTextColor="#A6AEC1"
      />
      <AuthTextInput
        onChangeText={(email) => setUser({ ...user, email })}
        placeholder="email"
        placeholderTextColor="#A6AEC1"
      />

      <AuthButton>
        <AuthButtonText onPress={handleSubmit}>Sign up</AuthButtonText>
      </AuthButton>
    </AuthContainer>
  );
}

export default Signup;
