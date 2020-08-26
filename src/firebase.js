import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAZmlBsAmalD8b1vnsGjbXLS26PDiXS4Ug",
    authDomain: "clone-slack-48a05.firebaseapp.com",
    databaseURL: "https://clone-slack-48a05.firebaseio.com",
    projectId: "clone-slack-48a05",
    storageBucket: "clone-slack-48a05.appspot.com",
    messagingSenderId: "147403776012",
    appId: "1:147403776012:web:57b7b6fa9ef2b70bff8e29",
    measurementId: "G-H0QGGJX67M"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;
