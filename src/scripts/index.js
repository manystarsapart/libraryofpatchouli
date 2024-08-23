// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
// import { getAnalytics } from "firebase/analytics";

import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { getFirestore, collection, getDocs, getDoc } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-storage.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmvWKUjs1EeA1QZz5_1JC2Ulxzprlm-GY",
  authDomain: "libraryofpatchouli.firebaseapp.com",
  projectId: "libraryofpatchouli",
  storageBucket: "libraryofpatchouli.appspot.com",
  messagingSenderId: "265234013985",
  appId: "1:265234013985:web:b55c62ca00931ffee46860",
  measurementId: "G-EST44QTHWQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const text_db = getFirestore(app);
const media_db = getStorage(app);


// storage: 
// large text content goes into cloud firestore
// image and media goes into cloud storage

// auth state detection
onAuthStateChanged(auth, user => {
    if (user != null) {
        console.log('logged in')
    } else {
        console.log('not logged in')
    }
});

