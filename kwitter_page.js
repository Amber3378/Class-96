var firebaseConfig = {
    apiKey: "AIzaSyDnPZpCvJhS0bRHe2I5e7hzbca1IqDXWbg",
    authDomain: "kwitter-project-c1b26.firebaseapp.com",
    databaseURL: "https://kwitter-project-c1b26-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-c1b26",
    storageBucket: "kwitter-project-c1b26.appspot.com",
    messagingSenderId: "595373432181",
    appId: "1:595373432181:web:10f3d1dd53439a31fe473c"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name"); room_name = localStorage.getItem("room_name");

  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); };
getData();


  function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}
