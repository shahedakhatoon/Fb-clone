import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDzpQTKUkM2otWhxqVBex0O8CkH4HzCvDo",
    authDomain: "facebook-clone-e53da.firebaseapp.com",
    projectId: "facebook-clone-e53da",
    storageBucket: "facebook-clone-e53da.appspot.com",
    messagingSenderId: "871003481309",
    appId: "1:871003481309:web:e3bfe9c750a586d5642734"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;