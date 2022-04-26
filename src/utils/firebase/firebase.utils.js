import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBu9oCkTIFjG878glP-DtTqtD1o4_5GDrY",
  authDomain: "crwn-clothing-db-44115.firebaseapp.com",
  projectId: "crwn-clothing-db-44115",
  storageBucket: "crwn-clothing-db-44115.appspot.com",
  messagingSenderId: "974492818354",
  appId: "1:974492818354:web:25d685264575a8e67a22ab",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

// google auth
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
  
export const signInWithGoggleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

  // database 
export const db = getFirestore();

// create and log user, addtionalInfo is for the displayname in email creation.
export const creatUserDocumentFromAuth = async (userAuth, additionalInfo={}) => {
  
  //if userAuth is null then exit
  if(!userAuth) return;
  
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot);
  console.log(userSnapShot.exists());

  // new user
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });

    } catch (error) {
      console.log("error creating user", error);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  // if email or password is null then exit
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}

export const SignInEmailAndPassword = async (email, password) => {
  // if email or password is null then exit
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}

