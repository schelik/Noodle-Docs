
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAKygBRodIjNk0FIIFPTKseVrKQFXg-0QE",
    authDomain: "noodle-docs.firebaseapp.com",
    projectId: "noodle-docs",
    storageBucket: "noodle-docs.appspot.com",
    messagingSenderId: "287058787348",
    appId: "1:287058787348:web:9591693e56a5ca96c47b01"
  };

let app;

if (!firebase.apps.length) {
    app=firebase.initializeApp(firebaseConfig);
}
else{
    app=firebase.app(); 
}

const db = app.firestore();

export { db };