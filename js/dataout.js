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
