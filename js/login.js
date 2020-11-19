// Login Page
// 1- si ils sont egales a une valeur exemple user@gmail.com et le mot de passe user
let mail = document.querySelector(".email");
let password = document.querySelector(".password");
let btnLog = document.querySelector(".submit-btn"); //Sumbit button

//3. Ecrire la fonction de controle

const checkLog = () => {
  let displayIn = document.querySelector(".loged-in");
  let displayErr = document.querySelector(".err");
  const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (mail.value.match(mailformat)) {
    document.querySelector(".content").style.display = "none";
    displayIn.style.display = "block";
  } else {
    displayErr.innerHTML = "Email or password incorrect !!";
  }
};

//2. addEventListener and check email & password using function checkLog
btnLog.addEventListener("click", checkLog);
