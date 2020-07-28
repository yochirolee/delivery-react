import firebase from "firebase/app";
import "firebase/firestore";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBBjKdrfUqYxzv8AuFezBLttmiUj6evhz0",
  authDomain: "testing-2b05e.firebaseapp.com",
  databaseURL: "https://testing-2b05e.firebaseio.com",
  projectId: "testing-2b05e",
  storageBucket: "testing-2b05e.appspot.com",
  messagingSenderId: "671346717916",
  appId: "1:671346717916:web:273e09a3717613e7c3b019",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default !firebase.apps.length
  ? firebase.initializeApp(config).firestore()
  : firebase.app().firestore();
