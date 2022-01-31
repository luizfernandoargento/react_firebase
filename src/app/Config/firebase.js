import firebase from "firebase/app";
//import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBqTRSKrfiI-a_YS-8fWLmsC6nVz_-ILaE",
    authDomain: "app-cliente-cli.firebaseapp.com",
    projectId: "app-cliente-cli",
    storageBucket: "app-cliente-cli.appspot.com",
    messagingSenderId: "223500533438",
    appId: "1:223500533438:web:03144989167876a42fa8ef",
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
