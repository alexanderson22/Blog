import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAj3zcb580F0avs2L9840TbiTz4MwaOZaE",
  authDomain: "blog-5399f.firebaseapp.com",
  projectId: "blog-5399f",
  storageBucket: "blog-5399f.appspot.com",
  messagingSenderId: "80250307864",
  appId: "1:80250307864:web:5638f3819a13d23ef20a6d"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

