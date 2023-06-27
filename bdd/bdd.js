// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyyKnjIzwzw_l9I9vuLj6Mtn83HqDKImg",
  authDomain: "p-qdocente.firebaseapp.com",
  projectId: "p-qdocente",
  storageBucket: "p-qdocente.appspot.com",
  messagingSenderId: "788799781400",
  appId: "1:788799781400:web:d35b3e299cba58b970e16d",
  measurementId: "G-D53LSC4K98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);