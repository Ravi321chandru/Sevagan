function report5(){

 firebase.auth().onAuthStateChanged(function(user) {  if (user) { 
  
      var user = auth.currentUser
      var numberss=auth.currentUser.phoneNumber

   var d=new Date();
    var date=d.getDate();
    var month=d.getMonth();
    var year=d.getFullYear();
    var hour=d.getHours();
    var minutes=d.getMinutes();
    var seconds=d.getSeconds();
    var fulldate= date+"."+month+"."+year;
    var fulltime= hour+":"+minutes+":"+seconds;

    var user_data={
     
      date: fulldate,
      time: fulltime,
      
   }
    database_ref.child('report/'+numberss).set(user_data).then(function(){
        alert("Reported!")
  })
 }
 })


 }