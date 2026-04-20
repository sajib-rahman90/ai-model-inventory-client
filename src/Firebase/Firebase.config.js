// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpqYTgED5jmPCBeY6iTmS7uXT7KrRxKMM",
  authDomain: "ai-model-inventory-client.firebaseapp.com",
  projectId: "ai-model-inventory-client",
  storageBucket: "ai-model-inventory-client.firebasestorage.app",
  messagingSenderId: "514277344679",
  appId: "1:514277344679:web:a53d62356afffb10706282",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
