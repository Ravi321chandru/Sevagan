
window.onload=function () {
   
   
    firebase.auth().onAuthStateChanged(function(user) {  if (user) { 

        var user = auth.currentUser
        var numberss=auth.currentUser.phoneNumber

        document.getElementById("phone").value=numberss;
    }
})
    
 }


function register(){

    var database_ref = database.ref()
  
    var name=document.getElementById("fullname").value;
    var email=document.getElementById("email").value;
    var emergency=document.getElementById("emergencyno").value;
    
       firebase.auth().onAuthStateChanged(function(user) {  if (user) { 
    
       var user = auth.currentUser
       var numberss=auth.currentUser.phoneNumber

       if(ValidateEmail(email)=='false'){
           alert("Invalid email")
       }
       else{
  
       var user_data={
        name: name,
        mobile: numberss,
        email: email,
        emergency: emergency
     };
  
     database_ref.child('customer/'+numberss).set(user_data)

     setTimeout(function(){
      window.location.replace("services.html");
     },1000)
     
   
    }
    }
  })
       }
  
  
  
  function ValidateEmail (email) {
    if (email.length <= 0) {
      return false
    }
  
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
      return true
    } else {
      return false
    }
  }
  