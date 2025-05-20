import { auth } from "@/firebaseConfig";
import Home from "@/Screen/Stack/Auth/Home";
import Login from "@/Screen/Stack/Auth/Login";
import Signup from "@/Screen/Stack/Auth/Signup";
import MainHome from "@/Screen/Stack/Main/MainHome";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { onAuthStateChanged, User } from "firebase/auth";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
} from "react-native";
export type RouteStackParamList = {
  Home: undefined;
  Login: undefined;
  Signup: undefined;
};
const Stack =
  createNativeStackNavigator<RouteStackParamList>();
const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};
const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={MainHome} />
    </Stack.Navigator>
  );
};
const App = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user != null) {
        setUser(user);
      }
      setLoading(false);
    });
  }, []);
  if (loading) {
    return <ActivityIndicator size="large" color="blue" />;
  }
  return user ? <MainStack /> : <AuthStack />;
};

export default App;

const styles = StyleSheet.create({});
