// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFfbqqjC8P3-yGeLvQ0ZwU3mLnIs5QFpM",
  authDomain: "myblog-45b3d.firebaseapp.com",
  projectId: "myblog-45b3d",
  storageBucket: "myblog-45b3d.appspot.com",
  messagingSenderId: "908134085321",
  appId: "1:908134085321:web:ef02e2340c7f741a029318"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export {fireDb, auth, storage}
