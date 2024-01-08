// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA82Tz0gdHAgdOTCrO8gGCxDYrNtMrm_nk",
  authDomain: "halla-c894c.firebaseapp.com",
  projectId: "halla-c894c",
  storageBucket: "halla-c894c.appspot.com",
  messagingSenderId: "823501560675",
  appId: "1:823501560675:web:531a015a0571538d115156",
  measurementId: "G-2PPK9EWF1W"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);