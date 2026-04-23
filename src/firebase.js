import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCijC8byj6KHggN22cs3XkgenO8IwE9jko",
  authDomain: "comboni-aero-club.firebaseapp.com",
  projectId: "comboni-aero-club",
  storageBucket: "comboni-aero-club.firebasestorage.app",
  messagingSenderId: "285362456238",
  appId: "1:285362456238:web:1bc9850c5a75444d940f3f",
  measurementId: "G-JRTDQ085N5"
};

const app = initializeApp(firebaseConfig);

// This version forces a different connection style to stop the "Blocked" error
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});