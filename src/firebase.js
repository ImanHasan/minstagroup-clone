import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'
import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyC92r8nV9v5jjQDh7i5bQm8qj24j0eBty4",
    authDomain: "minstagroup-clone.firebaseapp.com",
    projectId: "minstagroup-clone",
    storageBucket: "minstagroup-clone.appspot.com",
    messagingSenderId: "415958209581",
    appId: "1:415958209581:web:0a000e90080a7c569654a4",
    measurementId: "G-7ZKRL6LBLP"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);
    
// Initialize Firebase
const app = initializeApp(firebaseConfig);
    
// export
export const auth = getAuth(app);
// // initialize this way ^^^
export const googleAuthProvider = new GoogleAuthProvider();

// Use these for db & auth
const db = firebaseApp.firestore();
// const auth = firebase.auth();
const storage = firebase.storage();


export { getAuth, db, storage };