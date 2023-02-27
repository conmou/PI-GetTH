const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyCaz_xTEVUDL1uAgqcAG3-cWkcBtAJTc7k",
  authDomain: "api-test-71c64.firebaseapp.com",
  projectId: "api-test-71c64",
  storageBucket: "api-test-71c64.appspot.com",
  messagingSenderId: "150620082507",
  appId: "1:150620082507:web:5ef67478fcadcb581918ce",
  measurementId: "G-VH5DJDS6KB"
  // apiKey: "AIzaSyDPpCi0YLp9Q8Iiw2E8lKuo2m9V-sXEpEs",
  // authDomain: "ios-app-data-328f7.firebaseapp.com",
  // projectId: "ios-app-data-328f7",
  // storageBucket: "ios-app-data-328f7.appspot.com",
  // messagingSenderId: "294111614299",
  // appId: "1:294111614299:web:ff2f0242393da4eb90f67e",
  // measurementId: "G-6FJHJHZ1E1"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
// const date = db.collection("Date");
module.exports = db;