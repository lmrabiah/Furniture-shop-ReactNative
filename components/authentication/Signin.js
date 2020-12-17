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

function Signin({ navigation }) {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = () => {
    console.log("Signin", user);
  };
  return (
    <AuthContainer>
      <AuthTitle>Signin</AuthTitle>

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
      <AuthButton>
        <AuthButtonText onPress={handleSubmit}>Sign in</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.navigate("Signup")}>
        Click here to register!
      </AuthOther>
    </AuthContainer>
  );
}

export default Signin;
