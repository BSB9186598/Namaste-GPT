// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3PXvRsu9gTC8syyRxSfae4u_SRDe5DXg",
  authDomain: "netflix-gpt-ea06e.firebaseapp.com",
  projectId: "netflix-gpt-ea06e",
  storageBucket: "netflix-gpt-ea06e.appspot.com",
  messagingSenderId: "336734302944",
  appId: "1:336734302944:web:00b7146bf7c0fc84655685",
  measurementId: "G-B6B7FJHZYH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();