// Import the functions you need from the SDKs you need
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import {
  getReactNativePersistence,
  initializeAuth,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDizjKh1kMkOTq2dRuV5O1D3X7rBB0EfwI",
  authDomain: "calctrack-26e22.firebaseapp.com",
  projectId: "calctrack-26e22",
  storageBucket: "calctrack-26e22.firebasestorage.app",
  messagingSenderId: "473436182474",
  appId: "1:473436182474:web:b8f0096fdad0586f60e133",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(
    ReactNativeAsyncStorage
  ),
});
