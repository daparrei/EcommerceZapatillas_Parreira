// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCopjNx4CypULjCcWqgy-eOkb-buvOdeaY",
  authDomain: "ecommercezapatillas.firebaseapp.com",
  projectId: "ecommercezapatillas",
  storageBucket: "ecommercezapatillas.firebasestorage.app",
  messagingSenderId: "490225011124",
  appId: "1:490225011124:web:9bd049cffbae61d1b8cae1",
  measurementId: "G-JCCNX9E0VF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

