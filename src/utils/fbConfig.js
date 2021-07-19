import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyA9aprqZ1Wqs_7-zywrmchvXPym1CGKwXo",
  authDomain: "quadcopters-ab7d2.firebaseapp.com",
  projectId: "quadcopters-ab7d2",
  storageBucket: "quadcopters-ab7d2.appspot.com",
  messagingSenderId: "324971748213",
  appId: "1:324971748213:web:781b052812858d2423513c",
});

const db = firebase.firestore();

export { db };
