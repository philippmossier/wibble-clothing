import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config =
{
    apiKey: "AIzaSyDWyStZsrdQtlNXEg98D4HaUbUdXpZ3rag",
    authDomain: "wibble-db.firebaseapp.com",
    databaseURL: "https://wibble-db.firebaseio.com",
    projectId: "wibble-db",
    storageBucket: "",
    messagingSenderId: "459289316798",
    appId: "1:459289316798:web:b9efe72f8e7fc91a"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;