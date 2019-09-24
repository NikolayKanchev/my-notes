import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAvUpz8aHpXtr0kCVYUibPGQIcmSk0FtLw",
    authDomain: "my-notes-ff187.firebaseapp.com",
    databaseURL: "https://my-notes-ff187.firebaseio.com",
    projectId: "my-notes-ff187",
    storageBucket: "",
    messagingSenderId: "146042627897",
    appId: "1:146042627897:web:775d2acb15a372c0d22ae8",
    measurementId: "G-BWC0ZWVWC5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();

  export default firebase;