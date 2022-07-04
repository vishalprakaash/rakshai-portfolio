// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7I0Gm_jq3KNccqFluQZwBHn8YKZ1RGxY",
  authDomain: "rakshai-portfolio.firebaseapp.com",
  projectId: "rakshai-portfolio",
  storageBucket: "rakshai-portfolio.appspot.com",
  messagingSenderId: "839865592678",
  appId: "1:839865592678:web:992f4dcf75f8a07264b6a7",
  measurementId: "G-1B8MM5BPJ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);