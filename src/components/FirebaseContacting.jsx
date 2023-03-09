import firebase from 'firebase/app';
import 'firebase/database';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCnW5vleKvaLZ09XgaYnT3Ah_ya038Z1ps",
    authDomain: "comment-d8c57.firebaseapp.com",
    projectId: "comment-d8c57",
    storageBucket: "comment-d8c57.appspot.com",
    messagingSenderId: "49649317893",
    appId: "1:49649317893:web:07e26ecdcbc633f0a3446c",
    measurementId: "G-YPTS1VN9WM"
  };
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const database = firebase.database();

// Use the database reference to read or write data
// For example, to read data from the database:
database.ref('/users').once('value').then((snapshot) => {
  const users = snapshot.val();
  console.log(users);
  // Do something with the users data
});
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
