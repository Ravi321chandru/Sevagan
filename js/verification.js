
  


function qrprocess(decodedText){

  firebase.auth().onAuthStateChanged(function(user) {  if (user) { 
    var user = auth.currentUser
  var id= auth.currentUser.uid;
  var d=new Date();
  var date=d.getDate();
  var month=d.getMonth();
  var year=d.getFullYear();
  var hour=d.getHours();
  var minutes=d.getMinutes();
  var seconds=d.getSeconds();
  var fulldate= date+"."+month+"."+year;
  var fulltime= hour+":"+minutes+":"+seconds;
  
    firebase.database().ref().child("servicereq").orderByChild('serviceid').equalTo(decodedText).on('value', function(snapshot){
      snapshot.forEach(function(childSnapshot){
  
        try{
  
       
        var service=childSnapshot.val().service; 
        var mobile=childSnapshot.val().mobile;
        var times=childSnapshot.val().time;
        var dates=childSnapshot.val().date;
    
          var user_data={
           
            date: fulldate,
            time: fulltime, 
            mobile: mobile,
            status: "verified",
            serviceid: decodedText,
            service: service
           
         }
          database_ref.child('servicedone/'+id).set(user_data).then(function(){
            window.location.replace("underservice.html")
        })
          
    

        }catch(err){
          alert("verification failed!")
        }
  
      })
    })
  }
})
    
  }