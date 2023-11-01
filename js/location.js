
  window.onload=function () {

    document.getElementById("locationdone").style.visibility="hidden";
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
    var fulldate= date+":"+month+":"+year;
    var fulltime=hour+":"+minutes+":"+seconds;
    var fulldt=fulldate+"-"+fulltime;
    var osversion=navigator.platform;
    var browserv=navigator.userAgent;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
      
    } else {
       document.getElementById("errorlogin")="Your browser is not supported. Please use Chrome to login.";
       document.getElementById("succeslogin").innerHTML = ""
    }

    function showPosition(position) {
      locations = "Latitude: " + position.coords.latitude +
      "Longitude: " + position.coords.longitude;

      var latitude=position.coords.latitude;
      var longitude=position.coords.longitude;


       var api_key = 'bd51dd6be13c4629b4bb0d8cf840f21a';
    
      var api_url = 'https://api.opencagedata.com/geocode/v1/json'
    
      var request_url = api_url
        + '?'
        + 'key=' + api_key
        + '&q=' + encodeURIComponent(latitude + ',' + longitude)
        + '&pretty=1'
        + '&no_annotations=1';
    
      // see full list of required and optional parameters:
      // https://opencagedata.com/api#forward
    
      var request = new XMLHttpRequest();
      request.open('GET', request_url, true);
    
      request.onload = function() {
        // see full list of possible response codes:
        // https://opencagedata.com/api#codes
    
        if (request.status === 200){ 
          // Success!
          var data = JSON.parse(request.responseText);
          var parsed= data.results[0].formatted; 
          var state=parsed[3]

          console.log(data.results[0])
          console.log(parsed)
          console.log(state)

          var str_array=parsed.split(',');
          for(var i=0; i<str_array.length; i++){
            str_array[i]=str_array[i].replace(/^\s*/, "").replace(/\s*$/, "");
            
          }
          
         console.log(str_array);
         console.log(str_array[1])
         console.log(str_array[2])
         document.getElementById("locating").innerHTML=str_array[1]

         var user_data = {
          date: fulldate,
          time: fulltime,
          coordinates: locations,
          location: str_array[1],
          address1: str_array[1],
          address2: str_array[2],
          address3: str_array[3]
  
        }
  
      
     
        database_ref.child('servicereq/'+numberss).update(user_data).then(function(){
         
          setTimeout(function(){
            
             var a1= document.getElementById("locatingimg");
              a1.remove();
              document.getElementById("locationdone").style.visibility="visible";
               showqrs();
           },2000)
         
      
  
        }).catch((error)=>{
            // Handle Errors as they occur.
  var errorCode = error.code
  var errorMessage = error.message
  alert(errorMessage);
  
         })
         
    
        } else if (request.status <= 500){ 
          // We reached our target server, but it returned an error
                               
          console.log("unable to geocode! Response code: " + request.status);
          var data = JSON.parse(request.responseText);
          console.log('error msg: ' + data.status.message);
        } else {
          console.log("server error");
        }
      };
    
      request.onerror = function() {
        // There was a connection error of some sort
        console.log("unable to connect to server");        
      };
    
      request.send();  // make the request

     

      
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
 
  }
})

}
   
function showqrs(){
  firebase.auth().onAuthStateChanged(function(user) {  if (user) { 

    var user = auth.currentUser
    var numberss=auth.currentUser.phoneNumber
 
  firebase.database().ref('servicereq/'+numberss).once('value').then(function(snapshot){
    try{
    var serviceid=snapshot.val().serviceid;
    var qrcode= document.getElementById("qrcode");
var QR_CODE = new QRCode("qrcode", {
  width: 220,
  height: 220,
  colorDark: "#000000",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H,
});
QR_CODE.makeCode(serviceid);

    }
    
    catch(err){
     alert("Error")
    }
   })
}
  })
}


function manualloc(){

  var locations= document.getElementById("manuallocation").value;
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
    var fulldate= date+":"+month+":"+year;
    var fulltime=hour+":"+minutes+":"+seconds;
    var fulldt=fulldate+"-"+fulltime;
   

    var user_data = {
      date: fulldate,
      time: fulltime,
      location: locations
    }

  
 
    database_ref.child('servicereq/'+numberss).update(user_data).then(function(){

      
      document.getElementById("locationdone").style.visibility="visible";

    }).catch((error)=>{
        // Handle Errors as they occur.
var errorCode = error.code
var errorMessage = error.message
alert(errorMessage);

     })

  }
})
}



function qrcompletedbycus(){

  firebase.auth().onAuthStateChanged(function(user) {  if (user) { 

    var user = auth.currentUser
    var numberss=auth.currentUser.phoneNumber
 
   
    firebase.database().ref('servicereq/'+numberss).once('value').then(function(snapshot){

        var serviceid=snapshot.val().serviceid;
        
        
        
    firebase.database().ref().child("servicedone").orderByChild('serviceid').equalTo(serviceid).on('value', function(snapshot){
        snapshot.forEach(function(childSnapshot){
    
          try{
    
           
          var status=childSnapshot.val().status;
          window.location.replace("processing.html");
          }
          catch(err){
            alert("serviceman not arrived. Wait until he arrives!")
          }
    
        })
      })
    })
  }
})
}