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

   

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
          console.log("Room name -" + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
          document.getElementById("output").innerHTML += row; 
      });});}
getData();

function logout()
{
      window.location = "index.html";
}

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
