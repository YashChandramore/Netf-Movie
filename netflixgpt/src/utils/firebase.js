// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6wQyes8I3bfFNzMNtnR8ywijk1Nz0nJs",
  authDomain: "ntflix-f5cc9.firebaseapp.com",
  projectId: "ntflix-f5cc9",
  storageBucket: "ntflix-f5cc9.appspot.com",
  messagingSenderId: "649484135046",
  appId: "1:649484135046:web:42349a2033f96a7a9aff07",
  measurementId: "G-EGCJNKQ7PQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();