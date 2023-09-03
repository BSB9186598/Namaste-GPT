// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2SW7HtFCmVrzcnEPnFxVzxcJiHaJFWUU",
  authDomain: "netflixgpt-292f0.firebaseapp.com",
  projectId: "netflixgpt-292f0",
  storageBucket: "netflixgpt-292f0.appspot.com",
  messagingSenderId: "144120959206",
  appId: "1:144120959206:web:b1fb726da5a1e6d496eb27",
  measurementId: "G-YS1F63RG2P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();