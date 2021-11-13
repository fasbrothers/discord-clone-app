import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDz5uIjuPabOFgg2frMF0QKF2b_RWxxEoM",
  authDomain: "discord-clone-3bb3e.firebaseapp.com",
  projectId: "discord-clone-3bb3e",
  storageBucket: "discord-clone-3bb3e.appspot.com",
  messagingSenderId: "509618286456",
  appId: "1:509618286456:web:82fa0292f81afc5722e28d",
  measurementId: "G-ZKJB9V9C8Z",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
