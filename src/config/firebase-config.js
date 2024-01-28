// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9wOpHEk9eHZ-RkSpiuLD9KUtgR-EjRWU",
  authDomain: "expense-tracker-db59b.firebaseapp.com",
  projectId: "expense-tracker-db59b",
  storageBucket: "expense-tracker-db59b.appspot.com",
  messagingSenderId: "266024535928",
  appId: "1:266024535928:web:823b3a46d8b500376e2a8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);