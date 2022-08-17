// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFYbf3na3RAXqGMt9vK1P5aFIIu_lGMQM",
  authDomain: "assignment-ten-c55ee.firebaseapp.com",
  projectId: "assignment-ten-c55ee",
  storageBucket: "assignment-ten-c55ee.appspot.com",
  messagingSenderId: "41480544251",
  appId: "1:41480544251:web:bab3032e1522c5d4a5b55e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth