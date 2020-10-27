import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB1TpWbXdNbj5yB-1AabHEmsqxMX5OcPK0",
  authDomain: "crwn-db-2fa90.firebaseapp.com",
  databaseURL: "https://crwn-db-2fa90.firebaseio.com",
  projectId: "crwn-db-2fa90",
  storageBucket: "crwn-db-2fa90.appspot.com",
  messagingSenderId: "430837873949",
  appId: "1:430837873949:web:e49de0ba7c7ab314c3b5f4",
  measurementId: "G-JTLW0RBNWT"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;