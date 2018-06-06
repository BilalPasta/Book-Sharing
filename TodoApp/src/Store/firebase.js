import * as firebase from 'firebase';
  var config = {
    apiKey: "AIzaSyCSZMA5dkRFHM-J3QvttLeAGEHltSJuANM",
    authDomain: "todoapp-54cf0.firebaseapp.com",
    databaseURL: "https://todoapp-54cf0.firebaseio.com",
    projectId: "todoapp-54cf0",
    storageBucket: "todoapp-54cf0.appspot.com",
    messagingSenderId: "827388908970"
  };
 
  const firebaseApp = firebase.initializeApp(config);

  export default firebaseApp;
