// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPmlAth3eB-SOBSxQnVbPjrToY-5d_iso",
  authDomain: "bootcamp-app-9fe59.firebaseapp.com",
  projectId: "bootcamp-app-9fe59",
  storageBucket: "bootcamp-app-9fe59.appspot.com",
  messagingSenderId: "569587960802",
  appId: "1:569587960802:web:407003abac1bb3ee7c87bb",
  measurementId: "G-F2DE7F6HPB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
