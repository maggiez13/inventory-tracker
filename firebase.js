// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmT-1vCL7A2neGD4Dq3tw4aBG9dIe8QJU",
  authDomain: "inventory-management-887bf.firebaseapp.com",
  projectId: "inventory-management-887bf",
  storageBucket: "inventory-management-887bf.appspot.com",
  messagingSenderId: "301498831635",
  appId: "1:301498831635:web:0166b201bc3c7ec723c0e6",
  measurementId: "G-W2H9BH90PF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { firestore };