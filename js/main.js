/** @format */

// Login Page
// 1- si ils sont egales a une valeur exemple user@gmail.com et le mot de passe user
let mail = document.querySelector(".email");
let password = document.querySelector(".password");
let btnLog = document.querySelector(".submit-btn"); //Sumbit button

//2. addEventListener and check email & password using function checkLog
btnLog.addEventListener("click", checkLog);

//3. Ecrire la fonction de controle

function checkLog() {
  var displayIn = document.querySelector(".loged-in");
  var displayErr = document.querySelector(".err");
  console.log("Email: " + mail.value);
  console.log("Password: " + password.value);
  console.log(displayIn);

  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (mail.value.match(mailformat)) {
    console.log(displayIn);
    document.querySelector(".content").style.display = "none";

    displayIn.style.display = "block";
  } else {
    //alert("Email or password incorrect !!");
    displayErr.innerHTML = "Email or password incorrect !!";
  }
}




// Animation accueil
var bgImageArray = ["1", "2", "3", "4"],
base = "../res/Accueil/bg",
secs = 4;
bgImageArray.forEach(function(img){
    new Image().src = base + img; 
    // caches images, avoiding white flash between background replacements
});

function backgroundSequence() {
    window.clearTimeout();
    var k = 0;
    for (i = 0; i < bgImageArray.length; i++) {
        setTimeout(function(){ 
            document.getElementById('animated-bg').style.background = "url(" + base + bgImageArray[k] +".jpeg" +") no-repeat right center";
            document.getElementById('animated-bg').style.backgroundSize ="contain";
        if ((k + 1) === bgImageArray.length) { setTimeout(function() { backgroundSequence() }, (secs * 1000))} else { k++; }            
        }, (secs * 1000) * i)   
    }
}
backgroundSequence();