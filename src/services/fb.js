// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPrLFCk7Om2TCr6BcgyXrFkYefxgOyFZ8",
  authDomain: "funandlearn-dev.firebaseapp.com",
  projectId: "funandlearn-dev",
  storageBucket: "funandlearn-dev.appspot.com",
  messagingSenderId: "406528670826",
  appId: "1:406528670826:web:1e04a1420ccaa3e28fde13"
};

/* const firebaseConfig = {
  apiKey: "AIzaSyDHmPUr-QAhbqwryrs9MctyC6oRPi_KyfU",
  authDomain: "funandlearn-77a98.firebaseapp.com",
  databaseURL: "https://funandlearn-77a98.firebaseio.com",
  projectId: "funandlearn-77a98",
  storageBucket: "funandlearn-77a98.appspot.com",
  messagingSenderId: "440943295997",
  appId: "1:440943295997:web:947b54d66ff39a64bf6d94",
  measurementId: "G-X8WLZZ7D3B"
}; */

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
