import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCV5yOIUbBk_wUtfja4A_uzhVhTcOvmeXI",
    authDomain: "twitter-clone-f1d97.firebaseapp.com",
    projectId: "twitter-clone-f1d97",
    storageBucket: "twitter-clone-f1d97.appspot.com",
    messagingSenderId: "52405371938",
    appId: "1:52405371938:web:23ee3f076cb1927cd9767b",
    measurementId: "G-BJ693QH7RT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;