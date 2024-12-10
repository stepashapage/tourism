// firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCRg28DhZAB5VkDTtyKPBMx5RKfCZ3KlA",
  authDomain: "tourism-19752.firebaseapp.com",
  projectId: "tourism-19752",
  storageBucket: "tourism-19752.appspot.com",
  messagingSenderId: "134661966334",
  appId: "1:134661966334:web:4b4da36b9dc19a82dc98af",
  measurementId: "G-0JCZJYG8WV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
