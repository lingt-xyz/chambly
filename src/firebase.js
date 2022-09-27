// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoKbbAd7LIdIAcZFvnZnyp8itO-dqNYAI",
  authDomain: "chambly-4dace.firebaseapp.com",
  projectId: "chambly-4dace",
  storageBucket: "chambly-4dace.appspot.com",
  messagingSenderId: "524982408924",
  appId: "1:524982408924:web:d00e9c6f80ad2fda648619",
  measurementId: "G-ZFT1R478S4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);