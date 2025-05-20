import React from "react";
import { StyleSheet, TextInput } from "react-native";

type props = {
  placeholder: string;
  onChangeText: (val: string) => void;
};
const AuthInput = ({
  placeholder,
  onChangeText,
}: props) => {
  return (
    <TextInput
      style={styles.main}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  );
};

export default AuthInput;

const styles = StyleSheet.create({
  main: {
    width: "90%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 12,
    borderWidth: 0.3,
    margin: 20,
    paddingLeft: 14,
  },
});
