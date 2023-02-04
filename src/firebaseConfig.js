// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQtA_ftf6QJ-YpqsE9R20T6ZXAaMluHjQ",
  authDomain: "vue3-2023-1d643.firebaseapp.com",
  projectId: "vue3-2023-1d643",
  storageBucket: "vue3-2023-1d643.appspot.com",
  messagingSenderId: "895756572964",
  appId: "1:895756572964:web:a7e296adb7a9d2aa49fbb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth()

export {auth}