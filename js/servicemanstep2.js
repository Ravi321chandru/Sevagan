function reg(){

    var district= document.getElementById("inputdistrict").value;
    var village= document.getElementById("village").value;
    var works= document.getElementById("inputwork").value;
         
    firebase.auth().onAuthStateChanged(function(user) {  if (user) { 

        var user = auth.currentUser
        var id= auth.currentUser.uid;
   


    

    if(district==0||village==0||works==0)
    {
        console.log("hello")
        alert("Fill all the details required!")
  
    }
    else{
        var user_data={
          works: works,
          district: district,
          village: village
       }


    
    database_ref.child('users/'+id).update(user_data).then(function(){
        window.location.replace("user.html");
    })
}

}
     })
}