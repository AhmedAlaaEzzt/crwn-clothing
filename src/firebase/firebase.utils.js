import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCN8S4_3B8lMwI4UJOzPpeF4N3JlkYWmGE",
  authDomain: "crwn-db-4977e.firebaseapp.com",
  projectId: "crwn-db-4977e",
  storageBucket: "crwn-db-4977e.appspot.com",
  messagingSenderId: "188689294632",
  appId: "1:188689294632:web:8379328a43aa420a3a5c1d",
  measurementId: "G-XDSN0MJW75",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();



provider.setCustomParameters({ prompt: "select_account" });




export  const signInWithGoogle =  () => auth.signInWithPopup(provider);


export default firebase;