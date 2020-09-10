import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBm_RIQn0jI5UzmnPKmZxNY9lQPu0LJN-k",
    authDomain: "simple-db-aed86.firebaseapp.com",
    databaseURL: "https://simple-db-aed86.firebaseio.com",
    projectId: "simple-db-aed86",
    storageBucket: "simple-db-aed86.appspot.com",
    messagingSenderId: "510405504605",
    appId: "1:510405504605:web:f5788cc2314c770a9a27b4",
    measurementId: "G-71MH7DD45P"
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;