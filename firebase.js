import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDnYg5Ai-JIlU-RjNnskGOpjpk1mn__znY",
	authDomain: "woof-f497f.firebaseapp.com",
	databaseURL: "https://woof-f497f-default-rtdb.firebaseio.com",
	projectId: "woof-f497f",
	storageBucket: "woof-f497f.appspot.com",
	messagingSenderId: "1090222539923",
	appId: "1:1090222539923:web:0c1cd4ccca77b32288f966",
	measurementId: "G-1BJ87447KJ"
  };

let firebaseApp;

if (firebase.apps.length === 0) {
	firebaseApp = firebase.initializeApp(firebaseConfig);
} else {
	firebaseApp = firebase.app();
}

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
