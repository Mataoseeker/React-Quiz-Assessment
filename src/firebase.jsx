// Import the functions you need from the SDKs you need
// import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsSjhn32keq8QxjtgdW3Q93t-jerIt2-A",
  authDomain: "react-quiz-app-bda58.firebaseapp.com",
  projectId: "react-quiz-app-bda58",
  storageBucket: "react-quiz-app-bda58.appspot.com",
  messagingSenderId: "838097828236",
  appId: "1:838097828236:web:a647ae9ae4964cf45efea9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
export { db }
// export default firebase;
