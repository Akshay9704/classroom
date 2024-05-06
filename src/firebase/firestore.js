import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkUP1cCWj5F6QbPcu8EFgXxHzHjxG3_zE",
  authDomain: "classroom-b8607.firebaseapp.com",
  projectId: "classroom-b8607",
  storageBucket: "classroom-b8607.appspot.com",
  messagingSenderId: "769548436058",
  appId: "1:769548436058:web:74edc3fe501426f59e0e63",
  measurementId: "G-0S64N5F6SX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };