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
  
  const auth = firebase.auth();
  
function signUp(){
var user = firebase.auth().currentUser;
var displayName = document.getElementById("name").value;
var email = document.getElementById("email");
var password = document.getElementById("password");
	
user.updateProfile({
  displayName: "Updated User's Name",
}).then(function() {
  // Update successful.
  console.log('User Profile Updated Successfully');
}).catch(function(error) {
  // An error happened.
});

const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
		alert("Signed Up");
}
	    
 function Google(){
  var provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithRedirect(provider).then(function(result) {
  var token = result.credential.accessToken;
  var user = result.user;
}).catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
  var email = error.email;
  var credential = error.credential;
});
 }

function Github(){
  var provider = new firebase.auth.GithubAuthProvider();
  firebase.auth().signInWithRedirect(provider).then(function(result) {
  var token = result.credential.accessToken;
  var user = result.user;
}).catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
  var email = error.email;
  var credential = error.credential;
});
 }

function Microsoft(){
  var provider = new firebase.auth.OAuthProvider('microsoft.com');
  firebase.auth().signInWithRedirect(provider).then(function(result) {
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

    if(user){
      var email_id = user.email;
	  var name = user.displayName;
	  var photoUrl = user.photoURL;
	  
      document.getElementById("user_para").innerHTML = email_id;
      document.getElementById("auser_para").innerHTML = name;
      document.getElementById("photo_para").src=photoUrl;

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

