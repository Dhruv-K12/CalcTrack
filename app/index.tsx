import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import App from "./App";
const index = () => {
  return (
    <>
      <StatusBar style="auto" />
      <App />
    </>
  );
};

export default index;

const styles = StyleSheet.create({});
