function submitting(){
    
    var value= document.getElementById("optionon").value;
    var description=document.getElementById("description").value;

   if(value==0||description==0){
     alert("fill required details!")
     return;
   }

    firebase.auth().onAuthStateChanged(function(user) {  if (user) { 
  
        var user = auth.currentUser
        var numberss=auth.currentUser.phoneNumber
      
  
      var user_data={
        
        option: value,
        description: description,

     }
     
     database_ref.child('servicereq/'+numberss).update(user_data).then(function(){
        window.location.replace("location.html");
      })
    }
})
   
  }