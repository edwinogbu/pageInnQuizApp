import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from "firebase/storage";


// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaxHrrtuln26pdtQLhIDJUHxCj08Hq6yM",
  authDomain: "quizexam-7f8c6.firebaseapp.com",
  projectId: "quizexam-7f8c6",
  storageBucket: "quizexam-7f8c6.appspot.com",
  messagingSenderId: "531707656552",
  appId: "1:531707656552:web:432414b79c1968425a7edd",
  measurementId: "G-1N5XP2FSYD",
  databaseURL: "https://quizexam-7f8c6-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const firestore = getFirestore(app);
const database = getDatabase(app);
const storage = getStorage(app);

export { app, analytics, firestore, auth, database, storage };