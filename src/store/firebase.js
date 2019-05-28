import * as firebase from 'firebase';
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCubANgvS8VpvQb7q2VGCUtsktVG8kGVUw",
    authDomain: "booksharing-99d4f.firebaseapp.com",
    databaseURL: "https://booksharing-99d4f.firebaseio.com",
    projectId: "booksharing-99d4f",
    storageBucket: "booksharing-99d4f.appspot.com",
    messagingSenderId: "291820118747"
  };
  const firebaseApp=firebase.initializeApp(config);

  export default firebaseApp;