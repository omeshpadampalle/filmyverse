import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDEDcfaD3V4CZwAud3iAUDKQ5fZPczvREc",
  authDomain: "filmyverse-c3af9.firebaseapp.com",
  projectId: "filmyverse-c3af9",
  storageBucket: "filmyverse-c3af9.appspot.com",
  messagingSenderId: "992469661934",
  appId: "1:992469661934:web:30428d474df6c549739bff"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;