/** @format */

// Animation accueil
var bgImageArray = ["1", "2", "3", "4", "5", "6"],
  base = "../res/Accueil/bg",
  secs = 4;
bgImageArray.forEach(function (img) {
  new Image().src = base + img + ".jpg";
  // caches images, avoiding white flash between background replacements
});

function backgroundSequence() {
  window.clearTimeout();
  var k = 0;
  for (i = 0; i < bgImageArray.length; i++) {
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
}
backgroundSequence();
