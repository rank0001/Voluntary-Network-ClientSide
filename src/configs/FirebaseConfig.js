import * as firebase from "firebase/app";
import "firebase/auth";
var firebaseConfig = {
    apiKey: "AIzaSyASsSx1oKtBWyDJShRsjRRSmZ3iiXc1QIo",
    authDomain: "voluntary-network.firebaseapp.com",
    databaseURL: "https://voluntary-network.firebaseio.com",
    projectId: "voluntary-network",
    storageBucket: "voluntary-network.appspot.com",
    messagingSenderId: "781267738940",
    appId: "1:781267738940:web:19eeca74eb30c28a677e39"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig); 

  export default firebase;