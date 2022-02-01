var foto;
window.onload = function () {
  foto = new Foto();
};

function selectImage() {
  let a = document.getElementById("foto-file");
  let b = document.getElementById("foto-image");
  a.click();

  setTimeout(() => {
    if (a.files.length != 0) {
      if(b.classList.contains("anmation")){
        b.classList.remove("anmation");
      }
    } 
  }, 5000);

  setTimeout(() => {
    if (a.files.length != 0) {
      if(b.classList.contains("anmation")){
        b.classList.remove("anmation");
      }
    } 
  },20000);

}

function makeGrayScale() {
  foto.grayscale();
}

function makeBright() {
  foto.makeBright();
}

function makeDark() {
  foto.makeDark();
}

function makeBlur() {
  foto.applyBlurFilter();
}

function makeSharp() {
  foto.applySharpFilter();
}

function makeEmboss() {
  foto.applyEmbossFilter();
}

function flipVertically() {
  foto.flipVertically();
}

function flipHorizontally() {
  foto.flipHorizontally();
}

function rotate(v) {
  foto.rotate(v.value);
}

function openColorpicker() {
  document.getElementById("color-picker").click();
}

function makeColorize(element) {
  var color = element.value;
  foto.colorize(color);
}

function openColorizeColorpicker() {
  document.getElementById("color-picker").click();
}

function applyColorFilter(element) {
  var color = element.value;
  foto.applyColorFilter(color);
}

function makeTransparent() {
  foto.makeTransparent();
}

function crop() {
  foto.cropSelected();
}
/*

function applyVintageFilter(){
  foto.applyVintageFilter();
}
*/

function download() {
  foto.export();
}
