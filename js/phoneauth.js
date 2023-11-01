
window.onload=function () {
    document.getElementById("otpentering").style.visibility="hidden";

    render();
    
 };
 function render() {
     window.recaptchaVerifier=new firebase.auth.RecaptchaVerifier('recaptcha-container');
     recaptchaVerifier.render();
 }
 function phoneAuth() {

   var number=document.getElementById('customernumber').value;
   
     var phnumber="+91"+number;
    
     firebase.auth().signInWithPhoneNumber(phnumber,window.recaptchaVerifier).then(function (confirmationResult) {
        
         window.confirmationResult=confirmationResult;
         coderesult=confirmationResult;
        
       
         console.log(coderesult);
         var a= document.getElementById("phoneentering");
         a.remove();
        
         document.getElementById("otpentering").style.visibility="visible";
         document.getElementById("errorotp").innerHTML='';
         
       
         
         
     }).catch(function (error) {
          document.getElementById("errorotp").innerHTML=error.message;
       
     });
 
 
   }

   function codeverify() {
  
    var code=document.getElementById('otpenter').value;
    coderesult.confirm(code).then(function (result) {
        
        var user=result.user;
        console.log("phoneNumber",user.phoneNumber);
         document.getElementById("wrongotp").innerHTML='';
         checkuser();
  
      }).catch(function (error) {
         document.getElementById("wrongotp").innerHTML=error.message;
        });
  
  }

function checkuser(){

  firebase.auth().onAuthStateChanged(function(user) {  if (user) { 

    var user = auth.currentUser
    var numberss=auth.currentUser.phoneNumber
 
 
   // firebase.database().ref().child("Customer").orderByChild('mobile').on("child_added",function(snapshot){
     firebase.database().ref('customer/'+numberss).once('value').then(function(snapshot){
       try{
       var mobile=snapshot.val().mobile;
        var name=snapshot.val().name;
       window.location.replace("services.html");
 
       }
       
       catch(err){
         window.location.replace("register.html");
       }
      })
    }
})
  }

