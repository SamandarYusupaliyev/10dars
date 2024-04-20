import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBhwOz8iuCHQPKwdDoNM2mfAQAbWb5TSm4",
  authDomain: "my-kitchen-58954.firebaseapp.com",
  projectId: "my-kitchen-58954",
  storageBucket: "my-kitchen-58954.appspot.com",
  messagingSenderId: "758307142493",
  appId: "1:758307142493:web:21f53c68e112c4c2bcc6b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth =getAuth()