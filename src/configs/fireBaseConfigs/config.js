// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics"; // Optional: Only if you use analytics
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBr5MKRGBTxuMqd97bHGEqfTgTbtxCjGoQ",
  authDomain: "my-portfolio-6312.firebaseapp.com",
  projectId: "my-portfolio-6312",
  storageBucket: "my-portfolio-6312.firebasestorage.app",
  messagingSenderId: "622861163033",
  appId: "1:622861163033:web:0dcad791c15d8962f16888",
  measurementId: "G-19W6NTR15P"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };