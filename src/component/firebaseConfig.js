
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
console.log(process.env)
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "restaurantproject-4a20f.firebaseapp.com",
  databaseURL: "https://restaurantproject-4a20f-default-rtdb.firebaseio.com",
  projectId: "restaurantproject-4a20f",
  storageBucket: "restaurantproject-4a20f.appspot.com",
  messagingSenderId: "904481799684",
  appId: "1:904481799684:web:f601b7392feadc8552bf51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();