function signUp() {
    var name = document.getElementById('user_name').value;
    var em = document.getElementById('user_email').value;
    var pass = document.getElementById('user_pass').value;
    
    firebase.auth().createUserWithEmailAndPassword(em, pass)
    
    .then(function(success) {
        var skey =firebase.database().ref('Users/').push();

        var userObj = {
            id : skey.key,
            uname : name,
            email : em,
            password : pass
        }

        skey.set(userObj).then(function(success) {
            alert("Your account has been created.");
            window.open('https://go:index');
        });
    })
    
    .catch(function(error) {
        alert("Error : "+error);
    });


}
