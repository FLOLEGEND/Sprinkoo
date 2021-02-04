import firebase from 'firebase/app'
require ('firebase/firestore')
require("firebase/auth");
  const config = {
    apiKey: "AIzaSyA5kAmr48jnU1jR_n599lgHVdEq_8W6suY",
    authDomain: "vuejs-29090.firebaseapp.com",
    databaseURL: "https://vuejs-29090.firebaseio.com",
    projectId: "vuejs-29090",
    storageBucket: "vuejs-29090.appspot.com",
    messagingSenderId: "256155335506",
    appId: "1:256155335506:web:cdf76773f1ece49718188b"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  const db=firebase.firestore()
  export const dbMenuRef = db.collection("CarWash")
  export const orderPlacedRef = db.collection("CustomersComplaints")
  export const firebaseAuth= firebase.auth
  export {db}

