import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQLjxDcTCBx3Uicq44R_dpExT_926UgzA",
  authDomain: "portfolio-5f91e.firebaseapp.com",
  projectId: "portfolio-5f91e",
  storageBucket: "portfolio-5f91e.appspot.com",
  messagingSenderId: "701746623667",
  appId: "1:701746623667:web:b418164840d11f00842cc6",
};

// init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
