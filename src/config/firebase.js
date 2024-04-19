import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getMessaging } from "firebase/messaging";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFdWM8gS6Wxh81-BJJpfUKABLGEne2TFw",
  authDomain: "alnour-e081c.firebaseapp.com",
  databaseURL: "https://alnour-e081c-default-rtdb.firebaseio.com",
  projectId: "alnour-e081c",
  storageBucket: "alnour-e081c.appspot.com",
  messagingSenderId: "1072248244520",
  appId: "1:1072248244520:web:a1b341fcabfbed7b14a81d",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
export const messaging = getMessaging(app);
/////
// Initialize Firebase new
// firebase.initializeApp(firebaseConfig);

// const projectStorage = getFirestore(app);
// const projectFirestore = getStorage(app);
// // const timestamp = getFirestore.FieldValue.serverTimestamp;

// export  { projectStorage, projectFirestore };
