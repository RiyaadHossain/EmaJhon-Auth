// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEvnIaehMCaJAzAqIwShVxdxFU09VBuv8",
  authDomain: "ema-jhon-auth-17a30.firebaseapp.com",
  projectId: "ema-jhon-auth-17a30",
  storageBucket: "ema-jhon-auth-17a30.appspot.com",
  messagingSenderId: "269198504412",
  appId: "1:269198504412:web:4e6aa9f6c88097c3381f19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth