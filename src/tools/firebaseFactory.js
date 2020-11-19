import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB_skfPpbNJ8KnA2MYxzIo6NcxB3sV8k-s",
    authDomain: "petit-7890d.firebaseapp.com",
    databaseURL: "https://petit-7890d.firebaseio.com",
    projectId: "petit-7890d",
    storageBucket: "petit-7890d.appspot.com",
    messagingSenderId: "805064486427",
    appId: "1:805064486427:web:673d4365593aa86fa6d2be",
    measurementId: "G-TEMR0WBEV2"
  };

  const DB = firebase.initializeApp(firebaseConfig);

  export function GetDBFireBase() {
      return firebase.firestore(DB);
  }