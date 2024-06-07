// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyAv8inq0ZHeK7QlQ_H9ESfpICzy8mgzYLY",
  authDomain: "loginauthentication-fc912.firebaseapp.com",
  projectId: "loginauthentication-fc912",
  storageBucket: "loginauthentication-fc912.appspot.com",
  messagingSenderId: "724867880789",
  appId: "1:724867880789:web:d8ebf3c5c10fd9b7b441dc",
  measurementId: "G-0LSN5YRH8P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const database = getFirestore(app); // Initialize Firestore and export it