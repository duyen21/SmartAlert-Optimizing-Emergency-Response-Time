import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCJXw4o80MYjH6tdakdcBh05PK5YtLTfZY",
    authDomain: "gen-dev-e48e3.firebaseapp.com",
    projectId: "gen-dev-e48e3",
    storageBucket: "gen-dev-e48e3.appspot.com",
    messagingSenderId: "197222353132",
    appId: "1:197222353132:web:12008560fba683b5f6fdc9",
    measurementId: "G-20DW6P2THT",
    databaseURL: "https://users.firebaseio.com",
  };


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
