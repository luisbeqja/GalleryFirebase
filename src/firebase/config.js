import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDig3OT3ub-f_IBHKE1QdvnWZnP-9TQImA",
  authDomain: "galler-d1c23.firebaseapp.com",
  projectId: "galler-d1c23",
  storageBucket: "galler-d1c23.appspot.com",
  messagingSenderId: "726107113437",
  appId: "1:726107113437:web:ec277e94ce24c873911834",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
