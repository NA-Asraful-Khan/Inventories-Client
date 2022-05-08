// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyALb_ZGSK6lIjhSRXOqFn6N_h2oBu5snX0",
  authDomain: "inventory-7521f.firebaseapp.com",
  projectId: "inventory-7521f",
  storageBucket: "inventory-7521f.appspot.com",
  messagingSenderId: "183542104987",
  appId: "1:183542104987:web:bf85e7d8a61c2fc0ea973e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;