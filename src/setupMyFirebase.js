import firebase from 'firebase';

   // Initialize Firebase for VueTube
   var config = {
    apiKey: "AIzaSyA2lZvhNDz4ksohCfPzTB0dSbnDqbScYG0",
    authDomain: "vuetube-cf60f.firebaseapp.com",
    databaseURL: "https://vuetube-cf60f.firebaseio.com",
    projectId: "vuetube-cf60f",
    storageBucket: "gs://vuetube-cf60f.appspot.com",
    messagingSenderId: "423602091187"
  };
  firebase.initializeApp(config);

  
  export const frbase = firebase;