// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA0MxjV4z2tv6dkfW3BLbLBzvzBiOF0dm4",
    authDomain: "stooon-fashion.firebaseapp.com",
    projectId: "stooon-fashion",
    storageBucket: "stooon-fashion.appspot.com",
    messagingSenderId: "832341186857",
    appId: "1:832341186857:web:c0d17119158c7ce71b3f38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;