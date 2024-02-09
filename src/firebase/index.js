// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZOZOYTm87D8QtlTea9z3jI5S45lcH1IY",
  authDomain: "simularge-4aa59.firebaseapp.com",
  projectId: "simularge-4aa59",
  storageBucket: "simularge-4aa59.appspot.com",
  messagingSenderId: "103976973625",
  appId: "1:103976973625:web:0f672c7eb5d7b616a0a4e8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
