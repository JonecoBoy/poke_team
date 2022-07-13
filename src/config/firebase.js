// v9 compat packages are API compatible with v8 code
import app from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth, setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBVfKOk9RpbiXGvAJfLK9rlI9W-TqI8FYs",
    authDomain: "poketeam-auth.firebaseapp.com",
    projectId: "poketeam-auth",
    storageBucket: "poketeam-auth.appspot.com",
    messagingSenderId: "877238538706",
    appId: "1:877238538706:web:48e4d40d55f523f540780b"

};

const firebase = app.initializeApp(firebaseConfig);
const auth = getAuth(firebase)



export {firebase,auth}
