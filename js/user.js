
firebase.auth().onAuthStateChanged(function(user) {  if (user) { 

    var user = auth.currentUser
    var id= auth.currentUser.uid;
   
    firebase.database().ref('users/'+id).once('value').then(function(snapshot){

        var district=snapshot.val().district;
         var nameofmen=snapshot.val().full_name;
        
        
    firebase.database().ref().child("servicereq").orderByChild('location').equalTo(district).on('value', function(snapshot){
        snapshot.forEach(function(childSnapshot){
    
          try{
    
           
          var date=childSnapshot.val().date;
          var time=childSnapshot.val().time;
          var service=childSnapshot.val().service;
          var serviceid=childSnapshot.val().serviceid
          var mobile=childSnapshot.val().mobile;
          var location=childSnapshot.val().location;
          var address1=childSnapshot.val().address1;
          var address2=childSnapshot.val().address2;
          var address3=childSnapshot.val().address3;
          var option=childSnapshot.val().option;
          var description=childSnapshot.val().description
          

          const array=[date,time,service,serviceid,mobile,location,address1,address2,address3]
        gotohtml(date,time,service,serviceid,mobile,location,address1,address2,address3,option,description);
          
        }
        
        catch(err){
          alert("Error happened");
        }
       })
    })


    })
}
})


    function gotohtml(date,time,service,serviceid,mobile,location,address1,address2,address3,option,description){

          
    firebase.database().ref().child("customer").orderByChild('mobile').equalTo(mobile).on('value', function(snapshot){
        snapshot.forEach(function(childSnapshot){
    
          try{
    
            var names=childSnapshot.val().name;
            console.log(names)
           
            var element=document.getElementById("servicemenlists");
            var div=document.createElement('div');
            var div2=document.createElement('div');
            div.className="col-xl-4 col-lg-4 col-md-4 col-sm-12"
            div2.className="why-box"
            div2.innerHTML="Name: "+names+"<br>Service requested: "+service+"<br>location: "+location+"<br>Address: "+address1+"&nbsp;"+address2+"&nbsp;"+address3+"<br>Date and time of request: "+date+"&nbsp;"+time+"<br>Mobile number:"+mobile+"<br>Service option:"+option+"<br>Description:"+description;
            element.appendChild(div);
            element.appendChild(div2)

        }
        catch(err){
          alert("Error happened");
        }
         
    })
})
    }
        

