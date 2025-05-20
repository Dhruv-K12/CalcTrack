import { RouteStackParamList } from "@/app/App";
import AuthBtn from "@/components/AuthBtn";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
} from "react-native";
type props = {
  navigation: NativeStackNavigationProp<
    RouteStackParamList,
    "Home"
  >;
};
const Home = ({ navigation }: props) => {
  return (
    <ImageBackground
      source={require("../../../assets/images/fruits.png")}
      style={{ flex: 1 }}
    >
      <View style={styles.mainContainer}>
        <AuthBtn
          onPress={() => navigation.navigate("Login")}
          style={styles.btnContainer}
          colors={["#63F059", "#398A33"]}
        >
          Login
        </AuthBtn>
        <AuthBtn
          onPress={() => {
            navigation.navigate("Signup");
          }}
          style={styles.btnContainer}
          colors={["#FF9393", "#995858"]}
        >
          Signup
        </AuthBtn>
      </View>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  btnContainer: {
    width: "90%",
    height: 50,
    borderRadius: 20,
    alignItems: "center",
    margin: 10,
  },
  mainContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 10,
  },
});
