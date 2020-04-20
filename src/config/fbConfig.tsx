import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1WqTClHQyNADcUhLy2rU8a0hseSty4pE",
  authDomain: "cs-surf-secrets.firebaseapp.com",
  databaseURL: "https://cs-surf-secrets.firebaseio.com",
  projectId: "cs-surf-secrets",
  storageBucket: "cs-surf-secrets.appspot.com",
  messagingSenderId: "796192673519",
  appId: "1:796192673519:web:795ba162f0e04562ded51a",
  measurementId: "G-VGYBZNFS1W",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const fAuth = firebase.auth();
export const fDb = firebase.firestore();

export default firebase;
