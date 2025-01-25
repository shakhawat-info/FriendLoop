// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoe8DDAvy7m4A_uqpVawaR6c5H8GSmXNo",
  authDomain: "friendloop-cfc29.firebaseapp.com",
  databaseURL: "https://friendloop-cfc29-default-rtdb.firebaseio.com",
  projectId: "friendloop-cfc29",
  storageBucket: "friendloop-cfc29.firebasestorage.app",
  messagingSenderId: "822945362300",
  appId: "1:822945362300:web:657a662d86d1123ddcf4f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebaseConfig;