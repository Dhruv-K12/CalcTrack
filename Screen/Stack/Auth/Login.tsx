import { authHandler } from "@/Authentication";
import AuthBtn from "@/components/AuthBtn";
import AuthInput from "@/components/AuthInput";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <View style={styles.inputContainer}>
      <AuthInput
        placeholder="Enter Your Email"
        onChangeText={(val) => setEmail(val)}
      />
      <AuthInput
        placeholder="Enter Your Pass"
        onChangeText={(val) => setPass(val)}
      />
      <AuthBtn
        onPress={() => authHandler(email, pass)}
        style={styles.btnContainer}
      >
        Login
      </AuthBtn>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#1DCD9F",
    flex: 1,
    alignItems: "center",
  },
  btnContainer: {
    width: 200,
    height: 50,
    backgroundColor: "yellow",
    borderRadius: 10,
    alignItems: "center",
  },
});
