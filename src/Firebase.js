// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useRef, useState, useEffect } from "react";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAX-9F20NNNNOBQd3ujdnScU--QwqnZwu0",
  authDomain: "aurorauav-22713.firebaseapp.com",
  projectId: "aurorauav-22713",
  storageBucket: "aurorauav-22713.appspot.com",
  messagingSenderId: "459279590566",
  appId: "1:459279590566:web:b0f5a2b37dc711a9444067",
  measurementId: "G-2F7HT4BM19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
export function signup(email, password) {
   return createUserWithEmailAndPassword(auth, email, password);
}

export function logout(){
  return signOut(auth);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
} 

export function useAuth() {
  const [ currentUser, setCurrentUser] = useState();
    
  useEffect( () => {
    const unsub = onAuthStateChanged(auth, user => {setCurrentUser(user)});
    return unsub;
  }, [])

  return currentUser;
}