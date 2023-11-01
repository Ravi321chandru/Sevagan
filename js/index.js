
const firebaseConfig = {
  apiKey: "AIzaSyDqJeODBmRdRFpUzpPTG6RI5VyBnRv7VIU",
  authDomain: "sevagan-services.firebaseapp.com",
  databaseURL: "https://sevagan-services-default-rtdb.firebaseio.com",
  projectId: "sevagan-services",
  storageBucket: "sevagan-services.appspot.com",
  messagingSenderId: "249172322784",
  appId: "1:249172322784:web:b270904c010603c28e2385",
  measurementId: "G-9QHE3ZT48G"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const database = firebase.database()
var database_ref = database.ref()


function register()
{
    var name= document.getElementById("name").value;
    var email1= document.getElementById("username1").value;
    var number1=document.getElementById("mobileno").value;
    var password1=document.getElementById("pass1").value;
    auth.createUserWithEmailAndPassword(email1, password1)
    .then(() => {
      // Assign user
      var user = auth.currentUser
      // Save input data to firebase database
      var database_ref = database.ref()
      // Create user data to save to Firebase Realtime Database
     
      var user_data = {
        
        full_name: name,
        email: email1,
        number: number1,
        last_login: Date.now()
      }
      // Save user_data under the unique user.uid
      database_ref.child('users/' + user.uid).set(user_data)

      alert("Successfully registered..")
    
}).catch((error) => {
    // Handle Errors as they occur.
    var errorCode = error.code
    var errorMessage = error.message
    alert(errorMessage);
     
  });
 

}

function login(){
    lemail = document.querySelector('#username').value
    lpassword = document.querySelector('#pass').value
    var role;
  
    auth.signInWithEmailAndPassword(lemail, lpassword)
    .then(() => {
      // Assign user
      var user = auth.currentUser
      var id=auth.currentUser.uid;
      var numberss=auth.currentUser.phoneNumber

      checkmen();
  
  }).catch(function (error) {
     alert("login failed")
   });

            }
          

      function checkmen(){

              firebase.auth().onAuthStateChanged(function(user) {  if (user) { 
            
                var user = auth.currentUser
                var numberss=auth.currentUser.phoneNumber
                var id9=auth.currentUser.uid;
             
             
               // firebase.database().ref().child("Customer").orderByChild('mobile').on("child_added",function(snapshot){
                 firebase.database().ref('users/'+id9).once('value').then(function(snapshot){
                  
                    var work=snapshot.val().works;
                    var district=snapshot.val().district;
                    var village=snapshot.val().village;
                    var full_name= snapshot.val().full_name;
                    var email=snapshot.val().email;
                    

                    if(work==undefined||district==undefined||village==undefined){
                      window.location.replace("servicemendetails.html");
                    }
                    else{
                      window.location.replace("user.html");
                    }
             
                   
                   
                   
                  })
                }
            })
              }
          function showError(error) {
            switch(error.code) {
              case error.PERMISSION_DENIED:
                document.getElementById("errorlogin").innerHTML = "Please allow the location permission to login."
                document.getElementById("succeslogin").innerHTML = ""
                break;
              case error.POSITION_UNAVAILABLE:
                document.getElementById("errorlogin").innerHTML = "Please enable GPS/Location in your device and try logging in again."
                document.getElementById("succeslogin").innerHTML = ""
                break;
              case error.TIMEOUT:
                document.getElementById("errorlogin").innerHTML = "Timed out. Please try again."
                document.getElementById("succeslogin").innerHTML = ""
                break;
              case error.UNKNOWN_ERROR:
                document.getElementById("errorlogin").innerHTML = "Something went wrong. Please try again later."
                document.getElementById("succeslogin").innerHTML = ""
                break;
            }
          }
       
        
