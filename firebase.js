// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCRg28DhZAB5VkDTtyKPBMx5RKfCZ3KlA",
  authDomain: "tourism-19752.firebaseapp.com",
  projectId: "tourism-19752",
  storageBucket: "tourism-19752.firebasestorage.app",
  messagingSenderId: "134661966334",
  appId: "1:134661966334:web:4b4da36b9dc19a82dc98af",
  measurementId: "G-0JCZJYG8WV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
