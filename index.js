var firebaseConfig = {
    apiKey: "AIzaSyAYGHW1fppyfoW7AnNufPnEm4thtCM6KfE",
    authDomain: "login-a7858.firebaseapp.com",
    databaseURL: "https://login-a7858.firebaseio.com",
    projectId: "login-a7858",
    storageBucket: "login-a7858.appspot.com",
    messagingSenderId: "596338404902",
    appId: "1:596338404902:web:03298431a4afc8a5b240e7",
    measurementId: "G-1G0PSD3LND"
  };
  firebase.initializeApp(firebaseConfig);
  
 var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  
 function Google(){
  firebase.auth().signInWithPopup(provider).then(function(result) {
  var token = result.credential.accessToken;
  var user = result.user;
}).catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
  var email = error.email;
  var credential = error.credential;
});
 }
	
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){
      var name, email_id = user.email;
      document.getElementById("user_para").innerHTML = email_id;
      document.getElementById('name').innerHTML = userName;

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function login(){
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  
  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout(){
  firebase.auth().signOut();
}
