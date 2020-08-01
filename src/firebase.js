import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCaPllIo0eAKY-xGzKVHKi8i_iqMXvkYCA",
  authDomain: "insta-clone-cbf2f.firebaseapp.com",
  databaseURL: "https://insta-clone-cbf2f.firebaseio.com",
  projectId: "insta-clone-cbf2f",
  storageBucket: "insta-clone-cbf2f.appspot.com",
  messagingSenderId: "355243146602",
  appId: "1:355243146602:web:84fc4a3f961297cc9df913",
  measurementId: "G-M76XY3KV64",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
