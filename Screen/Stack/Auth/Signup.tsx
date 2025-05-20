import { authHandler } from "@/Authentication";
import AuthBtn from "@/components/AuthBtn";
import AuthInput from "@/components/AuthInput";
import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const verifyHandler = () => {
    if (name.trim().length !== 0) {
      authHandler(email, pass, name);
    } else {
      Alert.alert("Invalid Name", "Your Name is Invalid");
    }
  };
  return (
    <View style={styles.main}>
      <AuthInput
        placeholder="Enter Your Name"
        onChangeText={(val) => setName(val)}
      />
      <AuthInput
        placeholder="Enter Your Email"
        onChangeText={(val) => setEmail(val)}
      />
      <AuthInput
        placeholder="Enter Your Password "
        onChangeText={(val) => setPass(val)}
      />
      <AuthBtn
        onPress={verifyHandler}
        style={styles.btnContainer}
      >
        Signup
      </AuthBtn>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#88304E",
    alignItems: "center",
  },
  btnContainer: {
    backgroundColor: "#1F7D53",
    width: 200,
    height: 50,
    alignItems: "center",
    borderRadius: 10,
  },
});
