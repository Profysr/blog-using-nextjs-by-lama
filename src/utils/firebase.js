// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_URL,
  authDomain: "profysr-blog.firebaseapp.com",
  projectId: "profysr-blog",
  storageBucket: "profysr-blog.appspot.com",
  messagingSenderId: "940026228630",
  appId: "1:940026228630:web:54a7f92bd59d9eff6e77b7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
