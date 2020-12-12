import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyC0QNCtD4GdI5MBQ9E6532qwgF1J_i689s",
    authDomain: "freelancers-4f895.firebaseapp.com",
    projectId: "freelancers-4f895",
    storageBucket: "freelancers-4f895.appspot.com",
    messagingSenderId: "1031562106972",
    appId: "1:1031562106972:web:de753e2e6d066c28b36e99",
    measurementId: "G-YLE1PZ8H9R"
  };

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore()

export default firebase