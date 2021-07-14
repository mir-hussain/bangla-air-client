import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCGQHrYC9m6cX4Gqe9txhJcJCUZjwEAHzk",
  authDomain: "bangla-air.firebaseapp.com",
  projectId: "bangla-air",
  storageBucket: "bangla-air.appspot.com",
  messagingSenderId: "405636507887",
  appId: "1:405636507887:web:357a9613ae9d0a5f1ed31a",
});

export const auth = app.auth();
export default app;
