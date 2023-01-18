// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// npm i firebase 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6P4vB3EhoLQC6Y9f1BEedoCM9-pLPRvQ",
  authDomain: "myappreactjs.firebaseapp.com",
  projectId: "myappreactjs",
  storageBucket: "myappreactjs.appspot.com",
  messagingSenderId: "739471222561",
  appId: "1:739471222561:web:22ec3da096685ee919c060",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//export const auth = getAuth(app)
export const db = getFirestore(app)