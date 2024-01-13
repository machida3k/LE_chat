import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCowf0W67QK8DwJzc8IhyciDsLXa4iVgJk",
    authDomain: "line-7df10.firebaseapp.com",
    projectId: "line-7df10",
    storageBucket: "line-7df10.appspot.com",
    messagingSenderId: "1051624772553",
    appId: "1:1051624772553:web:1263c9bd498240043f0e18",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};