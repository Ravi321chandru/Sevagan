var user = auth.currentUser
// Save input data to firebase database
var database_ref = database.ref()




function generate() {
  var pass = '';
  var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 
          'abcdefghijklmnopqrstuvwxyz0123456789@#$';
    
  for (i = 1; i <= 8; i++) {
      var char = Math.floor(Math.random()
                  * str.length + 1);
        
      pass += str.charAt(char)
  }
  localStorage.setItem("serviceneeded",pass);
  return pass;
}



//Emergency
function emer(){
  console.log("entered emer")

    var clicked= "Emergency";
    var d=new Date();
    var date=d.getDate();
    var month=d.getMonth();
    var year=d.getFullYear();
    var hour=d.getHours();
    var minutes=d.getMinutes();
    var seconds=d.getSeconds();
    var fulldate= date+"."+month+"."+year;
    var fulltime= hour+":"+minutes+":"+seconds;
  
    firebase.auth().onAuthStateChanged(function(user) {  if (user) { 
  
      var user = auth.currentUser
      var numberss=auth.currentUser.phoneNumber
      var serviceid= generate();
 

    var user_data={
     
      date: fulldate,
      time: fulltime,
      service: clicked,
      serviceid: serviceid,
      mobile: numberss

   }
    database_ref.child('servicereq/'+numberss).set(user_data).then(function(){
        window.location.replace("location.html");
  })
    }
  })
  }
  
  //plumbing
  function plumb(){
  
    var clicked= "Plumbing";
    var d=new Date();
    var date=d.getDate();
    var month=d.getMonth();
    var year=d.getFullYear();
    var hour=d.getHours();
    var minutes=d.getMinutes();
    var seconds=d.getSeconds();
    var fulldate= date+"."+month+"."+year;
    var fulltime= hour+":"+minutes+":"+seconds;
  
    firebase.auth().onAuthStateChanged(function(user) {  if (user) { 
  
      var user = auth.currentUser
      var numberss=auth.currentUser.phoneNumber
      var serviceid= generate();
    

    var user_data={
      
      date: fulldate,
      time: fulltime,
      service: clicked,
      serviceid: serviceid,
      mobile: numberss
   }
    database_ref.child('servicereq/' + numberss).set(user_data).then(function(){
        window.location.replace("option_plumbing.html");
  })
    }
  })
  }
  
  //Temporary Security
  function temps(){
  
    var clicked= "Temporary Security";
    var d=new Date();
    var date=d.getDate();
    var month=d.getMonth();
    var year=d.getFullYear();
    var hour=d.getHours();
    var minutes=d.getMinutes();
    var seconds=d.getSeconds();
    var fulldate= date+"."+month+"."+year;
    var fulltime= hour+":"+minutes+":"+seconds;
  
    firebase.auth().onAuthStateChanged(function(user) {  if (user) { 
  
      var user = auth.currentUser
      var numberss=auth.currentUser.phoneNumber
      var serviceid= generate();
      

    var user_data={
     
      date: fulldate,
      time: fulltime,
      service: clicked,
      serviceid: serviceid,
      mobile: numberss
   }
    database_ref.child('servicereq/' + numberss).set(user_data).then(function(){
        window.location.replace("location.html");
  })
    }
  })
  }
  
  //Volunteer
  function volunteer(){
  
    var clicked= "Volunteer";
    var d=new Date();
    var date=d.getDate();
    var month=d.getMonth();
    var year=d.getFullYear();
    var hour=d.getHours();
    var minutes=d.getMinutes();
    var seconds=d.getSeconds();
    var fulldate= date+"."+month+"."+year;
    var fulltime= hour+":"+minutes+":"+seconds;
  
    firebase.auth().onAuthStateChanged(function(user) {  if (user) { 
  
      var user = auth.currentUser
      var numberss=auth.currentUser.phoneNumber
      var serviceid= generate();
     

    var user_data={
     
      date: fulldate,
      time: fulltime,
      service: clicked,
      serviceid: serviceid,
      mobile: numberss

   }
    database_ref.child('servicereq/' + numberss).set(user_data).then(function(){
        window.location.replace("volunteer_options.html");
  })
    }
  })
  }
  
  //Water Services
  //Water cans
  function wcans(){
  
    var clicked= "Water cans";
    var d=new Date();
    var date=d.getDate();
    var month=d.getMonth();
    var year=d.getFullYear();
    var hour=d.getHours();
    var minutes=d.getMinutes();
    var seconds=d.getSeconds();
    var fulldate= date+"."+month+"."+year;
    var fulltime= hour+":"+minutes+":"+seconds;
  
    firebase.auth().onAuthStateChanged(function(user) {  if (user) { 
  
      var user = auth.currentUser
      var numberss=auth.currentUser.phoneNumber
      var serviceid= generate();
  

    var user_data={
    
      date: fulldate,
      time: fulltime,
      service: clicked,
      serviceid: serviceid,
      mobile: numberss

   }
    database_ref.child('servicereq/' + numberss).set(user_data).then(function(){
        window.location.replace("location.html");
  })
    }
  })
  }
  
  //Vehicle water services
  function vehi(){
  
    var clicked= "Vehicle water services";
    var d=new Date();
    var date=d.getDate();
    var month=d.getMonth();
    var year=d.getFullYear();
    var hour=d.getHours();
    var minutes=d.getMinutes();
    var seconds=d.getSeconds();
    var fulldate= date+"."+month+"."+year;
    var fulltime= hour+":"+minutes+":"+seconds;
  
    firebase.auth().onAuthStateChanged(function(user) {  if (user) { 
  
      var user = auth.currentUser
      var numberss=auth.currentUser.phoneNumber
      var serviceid= generate();
    

    var user_data={
     
      date: fulldate,
      time: fulltime,
      service: clicked,
      serviceid: serviceid,
      mobile: numberss

   }
    database_ref.child('servicereq/' + numberss).set(user_data).then(function(){
        window.location.replace("location.html");
  })
    }
  })
  }
  
  //RO repair
  function ro(){
  
    
    var clicked= "RO repair";
    var d=new Date();
    var date=d.getDate();
    var month=d.getMonth();
    var year=d.getFullYear();
    var hour=d.getHours();
    var minutes=d.getMinutes();
    var seconds=d.getSeconds();
    var fulldate= date+"."+month+"."+year;
    var fulltime= hour+":"+minutes+":"+seconds;
  
    firebase.auth().onAuthStateChanged(function(user) {  if (user) { 
  
      var user = auth.currentUser
      var numberss=auth.currentUser.phoneNumber
      var serviceid= generate();
      
    var user_data={
     
      date: fulldate,
      time: fulltime,
      service: clicked,
      serviceid: serviceid,
      mobile: numberss

   }
    database_ref.child('servicereq/' + numberss).set(user_data).then(function(){
        window.location.replace("location.html");
  })
    }
  })
  }
  
  //Telecommunication
  function telecom(){
  
    console.log("tv")
    var clicked= "Telecommunication";
    var d=new Date();
    var date=d.getDate();
    var month=d.getMonth();
    var year=d.getFullYear();
    var hour=d.getHours();
    var minutes=d.getMinutes();
    var seconds=d.getSeconds();
    var fulldate= date+"."+month+"."+year;
    var fulltime= hour+":"+minutes+":"+seconds;
  
    firebase.auth().onAuthStateChanged(function(user) {  if (user) { 
  
      var user = auth.currentUser
      var numberss=auth.currentUser.phoneNumber
      var serviceid= generate();
      
    var user_data={
     
      date: fulldate,
      time: fulltime,
      service: clicked,
      serviceid: serviceid,
      mobile: numberss

   }
    database_ref.child('servicereq/' + numberss).set(user_data).then(function(){
        window.location.replace("telecommunication_options.html");
  })
    }
  })
  }

  //Transport
  function transport(){
  
    var clicked= "Transport";
    var d=new Date();
    var date=d.getDate();
    var month=d.getMonth();
    var year=d.getFullYear();
    var hour=d.getHours();
    var minutes=d.getMinutes();
    var seconds=d.getSeconds();
    var fulldate= date+"."+month+"."+year;
    var fulltime= hour+":"+minutes+":"+seconds;
  
    firebase.auth().onAuthStateChanged(function(user) {  if (user) { 
  
      var user = auth.currentUser
      var numberss=auth.currentUser.phoneNumber
      var serviceid= generate();
      
    var user_data={
     
      date: fulldate,
      time: fulltime,
      service: clicked,
      serviceid: serviceid,
      mobile: numberss

   }
    database_ref.child('servicereq/' + numberss).set(user_data).then(function(){
        window.location.replace("transport_options.html");
  })
    }
  })
  }
  
  
  //Electrician
  //Television
  function tele(){
  
    console.log("tv")
    var clicked= "Television";
    var d=new Date();
    var date=d.getDate();
    var month=d.getMonth();
    var year=d.getFullYear();
    var hour=d.getHours();
    var minutes=d.getMinutes();
    var seconds=d.getSeconds();
    var fulldate= date+"."+month+"."+year;
    var fulltime= hour+":"+minutes+":"+seconds;

    firebase.auth().onAuthStateChanged(function(user) {  if (user) { 
  
      var user = auth.currentUser
      var numberss=auth.currentUser.phoneNumber
      var serviceid= generate();
     

    var user_data={
    
      date: fulldate,
      time: fulltime,
      service: clicked,
      serviceid: serviceid,
      mobile: numberss

   }
    database_ref.child('servicereq/' + numberss).set(user_data).then(function(){
        window.location.replace("option_tv.html");
  })
    }
  })
  }
  
  //Washing Machine
  function wash(){
  
    var clicked= "Washing Machine";
    var d=new Date();
    var date=d.getDate();
    var month=d.getMonth();
    var year=d.getFullYear();
    var hour=d.getHours();
    var minutes=d.getMinutes();
    var seconds=d.getSeconds();
     var fulldate= date+"."+month+"."+year;
    var fulltime= hour+":"+minutes+":"+seconds;
  
    firebase.auth().onAuthStateChanged(function(user) {  if (user) { 
  
      var user = auth.currentUser
      var numberss=auth.currentUser.phoneNumber
      var serviceid= generate();
     

    var user_data={
     
      date: fulldate,
      time: fulltime,
      service: clicked,
      serviceid: serviceid,
      mobile: numberss

   }
    database_ref.child('servicereq/' + numberss).set(user_data).then(function(){
        window.location.replace("option_washingmachine.html");
  })
    }
  })
  }
  
  //AC
  function ac(){
  
    var clicked= "AC";
    var d=new Date();
    var date=d.getDate();
    var month=d.getMonth();
    var year=d.getFullYear();
    var hour=d.getHours();
    var minutes=d.getMinutes();
    var seconds=d.getSeconds();
    var fulldate= date+"."+month+"."+year;
    var fulltime= hour+":"+minutes+":"+seconds;
  
    firebase.auth().onAuthStateChanged(function(user) {  if (user) { 
  
      var user = auth.currentUser
      var numberss=auth.currentUser.phoneNumber
      var serviceid= generate();
      
    var user_data={
     
      date: fulldate,
      time: fulltime,
      service: clicked,
      serviceid: serviceid,
      mobile: numberss

   }
    database_ref.child('servicereq/' + numberss).set(user_data).then(function(){
        window.location.replace("option_ac.html");
  })
    }
  })
  }
  
  //Fridge
  function fridge(){
  
    var clicked= "Fridge";
    var d=new Date();
    var date=d.getDate();
    var month=d.getMonth();
    var year=d.getFullYear();
    var hour=d.getHours();
    var minutes=d.getMinutes();
    var seconds=d.getSeconds();
    var fulldate= date+"."+month+"."+year;
    var fulltime= hour+":"+minutes+":"+seconds;
  
    firebase.auth().onAuthStateChanged(function(user) {  if (user) { 
  
      var user = auth.currentUser
      var numberss=auth.currentUser.phoneNumber
      var serviceid= generate();
      
    var user_data={
     
      date: fulldate,
      time: fulltime,
      service: clicked,
      serviceid: serviceid,
      mobile: numberss

   }
    database_ref.child('servicereq/' + numberss).set(user_data).then(function(){
        window.location.replace("option_fridge.html");
  })
    }
  })
  }
  
  //Inductive Stove
  function IS(){
   
    var clicked= "Inductive Stove";
    var d=new Date();
    var date=d.getDate();
    var month=d.getMonth();
    var year=d.getFullYear();
    var hour=d.getHours();
    var minutes=d.getMinutes();
    var seconds=d.getSeconds();
    var fulldate= date+"."+month+"."+year;
    var fulltime= hour+":"+minutes+":"+seconds;
  
    firebase.auth().onAuthStateChanged(function(user) {  if (user) { 
  
      var user = auth.currentUser
      var numberss=auth.currentUser.phoneNumber
      var serviceid= generate();
      

    var user_data={
     
      date: fulldate,
      time: fulltime,
      service: clicked,
      serviceid: serviceid,
      mobile: numberss

   }
    database_ref.child('servicereq/' + numberss).set(user_data).then(function(){
        window.location.replace("option_ic.html");
  })
    }
  })
  }
  
  //Mixer Grinder
  function mixer(){
  
    var clicked= "Mixer Grinder";
    var d=new Date();
    var date=d.getDate();
    var month=d.getMonth();
    var year=d.getFullYear();
    var hour=d.getHours();
    var minutes=d.getMinutes();
    var seconds=d.getSeconds();
    var fulldate= date+"."+month+"."+year;
    var fulltime= hour+":"+minutes+":"+seconds;
  
    firebase.auth().onAuthStateChanged(function(user) {  if (user) { 
  
      var user = auth.currentUser
      var numberss=auth.currentUser.phoneNumber
      var serviceid= generate();
      

    var user_data={
      
      date: fulldate,
      time: fulltime,
      service: clicked,
      serviceid: serviceid,
      mobile: numberss

   }
    database_ref.child('servicereq/' + numberss).set(user_data).then(function(){
        window.location.replace("option_mixer.html");
  })
    }
  })
  }
  
  //Speaker
  function speaker(){
   
    var clicked= "Speaker";
    var d=new Date();
    var date=d.getDate();
    var month=d.getMonth();
    var year=d.getFullYear();
    var hour=d.getHours();
    var minutes=d.getMinutes();
    var seconds=d.getSeconds();
    var fulldate= date+"."+month+"."+year;
    var fulltime= hour+":"+minutes+":"+seconds;
  
    firebase.auth().onAuthStateChanged(function(user) {  if (user) { 
    var user = auth.currentUser
    var numberss=auth.currentUser.phoneNumber
    var serviceid= generate();
    

  var user_data={
  
    date: fulldate,
    time: fulltime,
    service: clicked,
    serviceid: serviceid,
    mobile: numberss

 }
  database_ref.child('servicereq/' + numberss).set(user_data).then(function(){
      window.location.replace("option_speaker.html");
})
    }
  })
  }
  
  //Pooja, catering
  //Engagement
  function engage(){
  
    var clicked= "Engagement";
    var d=new Date();
    var date=d.getDate();
    var month=d.getMonth();
    var year=d.getFullYear();
    var hour=d.getHours();
    var minutes=d.getMinutes();
    var seconds=d.getSeconds();
    var fulldate= date+"."+month+"."+year;
    var fulltime= hour+":"+minutes+":"+seconds;
  
    firebase.auth().onAuthStateChanged(function(user) {  if (user) { 
  
      var user = auth.currentUser
      var numberss=auth.currentUser.phoneNumber
      var serviceid= generate();
     
  
    var user_data={
     
      date: fulldate,
      time: fulltime,
      service: clicked,
      serviceid: serviceid,
      mobile: numberss
  
   }
    database_ref.child('servicereq/' + numberss).set(user_data).then(function(){
        window.location.replace("wedding_options.html");
  })
    }
  })
  }
  
  //Wedding
  function wedd(){
  
    var clicked= "Wedding";
    var d=new Date();
    var date=d.getDate();
    var month=d.getMonth();
    var year=d.getFullYear();
    var hour=d.getHours();
    var minutes=d.getMinutes();
    var seconds=d.getSeconds();
    var fulldate= date+"."+month+"."+year;
    var fulltime= hour+":"+minutes+":"+seconds;
  
    firebase.auth().onAuthStateChanged(function(user) {  if (user) { 
  
      var user = auth.currentUser
    var numberss=auth.currentUser.phoneNumber
    var serviceid= generate();
   

  var user_data={
    
    date: fulldate,
    time: fulltime,
    service: clicked,
    serviceid: serviceid,
    mobile: numberss

 }
  database_ref.child('servicereq/' + numberss).set(user_data).then(function(){
      window.location.replace("wedding_options.html");
})
    }
  })
  }
  
  //Mehandi Function
  function mehandi(){
  
    var clicked= "Mehandi Function";
    var d=new Date();
    var date=d.getDate();
    var month=d.getMonth();
    var year=d.getFullYear();
    var hour=d.getHours();
    var minutes=d.getMinutes();
    var seconds=d.getSeconds();
    var fulldate= date+"."+month+"."+year;
    var fulltime= hour+":"+minutes+":"+seconds;
  
    firebase.auth().onAuthStateChanged(function(user) {  if (user) { 
  
      var user = auth.currentUser
    var numberss=auth.currentUser.phoneNumber
    var serviceid= generate();
  

  var user_data={
   
    date: fulldate,
    time: fulltime,
    service: clicked,
    serviceid: serviceid,
    mobile: numberss

 }
  database_ref.child('servicereq/' + numberss).set(user_data).then(function(){
      window.location.replace("wedding_options.html");
})
    }
  })
  }
  
  //House Warming Function
  function house(){
  
    var clicked= "House Warming Function";
    var d=new Date();
    var date=d.getDate();
    var month=d.getMonth();
    var year=d.getFullYear();
    var hour=d.getHours();
    var minutes=d.getMinutes();
    var seconds=d.getSeconds();
    var fulldate= date+"."+month+"."+year;
    var fulltime= hour+":"+minutes+":"+seconds;
  
    firebase.auth().onAuthStateChanged(function(user) {  if (user) { 
  
      var user = auth.currentUser
    var numberss=auth.currentUser.phoneNumber
    var serviceid= generate();
   

  var user_data={
   
    date: fulldate,
    time: fulltime,
    service: clicked,
    serviceid: serviceid,
    mobile: numberss

 }
  database_ref.child('servicereq/' + numberss).set(user_data).then(function(){
      window.location.replace("wedding_options.html");
})
    }
  })
  }
  