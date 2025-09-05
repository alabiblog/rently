// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "alabi-da6b5.firebaseapp.com",
  projectId: "alabi-da6b5",
  storageBucket: "alabi-da6b5.firebasestorage.app",
  messagingSenderId: "844529984330",
  appId: "1:844529984330:web:7dd5b8b457568c119097b3"
};

// Initialize Firebase
const app = getApps().length == 0 ? initializeApp(firebaseConfig): getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export {db,storage}






