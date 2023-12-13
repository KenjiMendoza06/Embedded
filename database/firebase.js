
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database"; 

const firebaseConfig = {
  apiKey: "AIzaSyCzQ6tPyfaeq3FYvueyaWcBdDk7xnWb7xI",
  authDomain: "carparking-e38d3.firebaseapp.com",
  databaseURL: "https://carparking-e38d3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "carparking-e38d3",
  storageBucket: "carparking-e38d3.appspot.com",
  messagingSenderId: "1002328972797",
  appId: "1:1002328972797:web:dd14fd4c0c7a8bc75b4d94"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();

export { db, ref, onValue };