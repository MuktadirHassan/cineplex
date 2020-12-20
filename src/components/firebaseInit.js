import firebase from 'firebase/app';
import 'firebase/auth';
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const app = firebase.initializeApp({
    apiKey: "AIzaSyC9zXIw5IZtSfdzdKotmhtZGan4yFmC7lM",
    authDomain: "cinema-hall2020.firebaseapp.com",
    projectId: "cinema-hall2020",
    storageBucket: "cinema-hall2020.appspot.com",
    messagingSenderId: "151341648612",
    appId: "1:151341648612:web:97315f43841f41d6e3faf1"
});

export const auth = app.auth();