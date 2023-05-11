// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgQJXHwGnRRawYpzyduHUH4oMQaXqao0k",
  authDomain: "food-fest-86fe6.firebaseapp.com",
  projectId: "food-fest-86fe6",
  storageBucket: "food-fest-86fe6.appspot.com",
  messagingSenderId: "117497038783",
  appId: "1:117497038783:web:2da140acb210d7a7cd430a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;