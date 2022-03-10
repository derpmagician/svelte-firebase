// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzlx0EFJ1ReuODgi2r1sqInS1pMM105hE",
  authDomain: "sveltetest-15b78.firebaseapp.com",
  projectId: "sveltetest-15b78",
  storageBucket: "sveltetest-15b78.appspot.com",
  messagingSenderId: "853486192457",
  appId: "1:853486192457:web:a7a3ea0dd813376f63fc98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);