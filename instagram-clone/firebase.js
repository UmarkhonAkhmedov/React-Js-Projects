import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyD4McD5dh1ZJ4oBmSS20vx4d25JqbEkmXU",
  authDomain: "instagram-clone-4c21c.firebaseapp.com",
  projectId: "instagram-clone-4c21c",
  storageBucket: "instagram-clone-4c21c.appspot.com",
  messagingSenderId: "746359972132",
  appId: "1:746359972132:web:fc2787aed3190feb8313b1"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };