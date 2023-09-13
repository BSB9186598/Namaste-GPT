// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCq_fzPlxM9pte6o2GSGIfuhk_rM5LH8Mg",
  authDomain: "netflix-clone-15518.firebaseapp.com",
  projectId: "netflix-clone-15518",
  storageBucket: "netflix-clone-15518.appspot.com",
  messagingSenderId: "157524520247",
  appId: "1:157524520247:web:64c7220caa8ad937dcbeb2",
  measurementId: "G-0MVP3BM9BL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();