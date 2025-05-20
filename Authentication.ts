import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { Alert } from "react-native";
import { auth } from "./firebaseConfig";
export const authHandler = (
  email: string,
  pass: string,
  name?: string
) => {
  if (
    email.includes("@") &&
    email.length >= 5 &&
    pass.length >= 8
  ) {
    name == undefined
      ? loginHandler(email, pass)
      : SignupHandler(name, email, pass);
  } else {
    if (!email.includes("@")) {
      Alert.alert(
        "Invalid Email",
        "Your Email Should Contain @"
      );
    } else if (email.length < 5) {
      Alert.alert("Email Invalid", "Your Email is Invalid");
    } else {
      Alert.alert(
        "Password Invalid",
        "Your Password should contain atleast 8 letters"
      );
    }
  }
};

const loginHandler = async (
  email: string,
  pass: string
) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      pass
    );
  } catch (e) {
    Alert.alert("Sorry", "Please Try Again Later");
  }
};
const SignupHandler = async (
  name: string,
  email: string,
  pass: string
) => {
  try {
    const userCredential =
      await createUserWithEmailAndPassword(
        auth,
        email,
        pass
      );
    updateProfile(userCredential.user, {
      displayName: name,
    });
  } catch (e) {
    Alert.alert("Sorry", "Please Try Again Later");
  }
};
