// firebaseConfig.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // If using Firebase Authentication
import { getFirestore } from "firebase/firestore"; // If using Firestore
import { getStorage } from "firebase/storage"; // If using Firebase Storage

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhgU-FaBsgtKI6lO2zmHI5pXNbN7vLelk",
  authDomain: "reactapp-eab06.firebaseapp.com",
  projectId: "reactapp-eab06",
  storageBucket: "reactapp-eab06.appspot.com",
  messagingSenderId: "716824477140",
  appId: "1:716824477140:web:2a8b45d3858beb65c0ea41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the authentication service
const auth = getAuth(app);

// Get a reference to the Firestore service
const db = getFirestore(app);

// Get a reference to the Storage service
const storage = getStorage(app);

// Export the necessary services
export { app, auth, db, storage };
