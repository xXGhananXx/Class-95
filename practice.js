var firebaseConfig = {
    apiKey: "AIzaSyBW9Cg8gfTn4ejHRcrG37MWPH-xVdnQqv0",
    authDomain: "kwitter-59034.firebaseapp.com",
    databaseURL: "https://kwitter-59034-default-rtdb.firebaseio.com",
    projectId: "kwitter-59034",
    storageBucket: "kwitter-59034.appspot.com",
    messagingSenderId: "310352857654",
    appId: "1:310352857654:web:65630ff388ab3163b1e697"
  };
  
  // Initialize Firebase
 firebase.initializeApp (firebaseConfig);
function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"    
    });
}
//ADD YOUR FIREBASE LINKS