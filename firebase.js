
import firebase from '@firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'
import 'firebase/storage'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCNAYAZuMls6JOY78q7BvARVGQMCZFRfyo",
    authDomain: "vuefs-prod-4662d.firebaseapp.com",
    databaseURL: "https://vuefs-prod-4662d.firebaseio.com",
    projectId: "vuefs-prod-4662d",
    storageBucket: "vuefs-prod-4662d.appspot.com",
    messagingSenderId: "937887035746",
    appId: "1:937887035746:web:82c62cd4f434cf30"
  };
  
const fb = firebase.initializeApp(config);

const db = firebase.firestore();

export {fb,db}