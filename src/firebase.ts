// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDEY25jbVZjy2WZTzOTvFlfYlXB8lcniN0",
  authDomain: "ship-delivery-8e25a.firebaseapp.com",
  databaseURL:
    "https://ship-delivery-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ship-delivery",
  storageBucket: "ship-delivery.appspot.com",
  messagingSenderId: "159125177748",
  appId: "1:159125177748:web:300f1e8b57e1d754a7fb81",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestoreDB = getFirestore(app);

export { auth, firestoreDB };
