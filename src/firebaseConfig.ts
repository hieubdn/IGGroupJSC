// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDW_d2PeUvLy09eaIfnpgf2Eiqeqewm4A4",
  authDomain: "ig-group-corporation.firebaseapp.com",
  projectId: "ig-group-corporation",
  storageBucket: "ig-group-corporation.firebasestorage.app",
  messagingSenderId: "513702006235",
  appId: "1:513702006235:web:3de00771b9795bae922bfe",
  measurementId: "G-4DCJM44N3C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);