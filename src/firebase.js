
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBq-7Ay5gjDKVStxv3uMUHCORzEZFpsyXE",
  authDomain: "saurav-e7fca.firebaseapp.com",
  databaseURL: "https://saurav-e7fca-default-rtdb.firebaseio.com",
  projectId: "saurav-e7fca",
  storageBucket: "saurav-e7fca.appspot.com",
  messagingSenderId: "54518573074",
  appId: "1:54518573074:web:2fb515548751a6949f10cb",
  measurementId: "G-20QWC1ME11"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);