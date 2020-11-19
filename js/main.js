// button calculez IMC
let btnImc = document.getElementById("btnImc");
let displayResultat = document.querySelector(".resultat");

// Animation accueil
const bgImageArray = ["1", "2", "3", "4", "5", "6"],
  base = "./res/Accueil/bg",
  secs = 4;
bgImageArray.forEach((img) => {
  new Image().src = base + img + ".jpg";
  // caches images, avoiding white flash between background replacements
});

const backgroundSequence = () => {
  window.clearTimeout();
  let k = 0;
  for (let i = 0; i < bgImageArray.length; i++) {
    setTimeout(function () {
      document.getElementById("animated-bg").style.background =
        "url(" + base + bgImageArray[k] + ".jpg" + ") no-repeat ";
      document.getElementById("animated-bg").style.backgroundSize = "100% 100%";
      if (k + 1 === bgImageArray.length) {
        setTimeout(function () {
          backgroundSequence();
        }, secs * 1000);
      } else {
        k++;
      }
    }, secs * 1000 * i);
  }
};
backgroundSequence();

// Calcul IMC
const CalculImc = (e) => {
  e.preventDefault();
  const poids = document.getElementById("poids").innerHTML;
  console.log(poids);
  // const imc = (poids * 10000) / (taille * taille);
  // alert(imc);
  // imc = Math.round(imc);
};
//addEventListener and display result using function calcul
btnImc.addEventListner("click", (e) => calculeImc(e));
// btnImc.addEventListener("click", calculImc);
