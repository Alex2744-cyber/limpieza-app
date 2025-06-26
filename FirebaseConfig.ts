// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfoyOdbNdsVk3EKHQL3sHR85SIzR7aOEQ",
  authDomain: "limpieza-app.firebaseapp.com",
  projectId: "limpieza-app",
  storageBucket: "limpieza-app.firebasestorage.app",
  messagingSenderId: "477178327780",
  appId: "1:477178327780:web:40cbafa4f6eee150bb32f1",
  measurementId: "G-PJ78ZTXS3T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const db = getFirestore(app);
export const storage = getStorage(app);
