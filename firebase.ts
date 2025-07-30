// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1l5ABBbntyGQDSHINWjJfClzxICAZW2E",
  authDomain: "classdv-2025.firebaseapp.com",
  projectId: "classdv-2025",
  storageBucket: "classdv-2025.firebasestorage.app",
  messagingSenderId: "623552548635",
  appId: "1:623552548635:web:b169aff5dc007cf0e7cdbe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
