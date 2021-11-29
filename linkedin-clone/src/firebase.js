import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCOpRpUrN8dB_pJByM3bY9vab3r5clLLJY",
  authDomain: "linked-clone-e6357.firebaseapp.com",
  projectId: "linked-clone-e6357",
  storageBucket: "linked-clone-e6357.appspot.com",
  messagingSenderId: "834123504296",
  appId: "1:834123504296:web:e158f07d419623748d409d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

exprot { auth, provider, storage };
export default db;