function createAccount() {
    var name = document.getElementById('user_name').value;
    var em = document.getElementById('user_email').value;
    var pass = document.getElementById('user_pass').value;
    var imageUrl = document.getElementById('user_pic').value;
    
    firebase.auth().createUserWithEmailAndPassword(em, pass)
    
    .then(function(success) {
       function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: em,
    password: pass,
    profile_picture : imageUrl
  });
}

    })
    
    .catch(function(error) {
        alert("Error : "+error);
    });


}
