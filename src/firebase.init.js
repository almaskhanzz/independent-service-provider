// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAqx6hxj2bfgXfWEWtK0RRyaw8wbho1qGA",
    authDomain: "independent-service-prov-6a168.firebaseapp.com",
    projectId: "independent-service-prov-6a168",
    storageBucket: "independent-service-prov-6a168.appspot.com",
    messagingSenderId: "891748091934",
    appId: "1:891748091934:web:e3a63424581a2ecd93c60f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;