// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBECU-RSNAF3eIevbLm-iJ6Pw2FEEDCJow",
  authDomain: "chat-app-69d8e.firebaseapp.com",
  projectId: "chat-app-69d8e",
  storageBucket: "chat-app-69d8e.appspot.com",
  messagingSenderId: "201545306759",
  appId: "1:201545306759:web:d4ef0779d91407ebf91e22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)