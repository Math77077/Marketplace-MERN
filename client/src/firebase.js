// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-e4997.firebaseapp.com",
  projectId: "mern-estate-e4997",
  storageBucket: "mern-estate-e4997.appspot.com",
  messagingSenderId: "718584090998",
  appId: "1:718584090998:web:7525f739559dae43922a57",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
