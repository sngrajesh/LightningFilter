//Nav  menu script

let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e) => {
    let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
    arrowParent.classList.toggle("showMenu");
  });
}
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".menuDiv");
sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

//about and  contact

function aboutToggle() {
  if (document.getElementById("contact").classList.contains("topOfTheLine")) {
    contactToggle();
  }
  if (document.getElementById("info").classList.contains("topOfTheLine")) {
    infoToggle();
  }
  document.getElementById("about").classList.toggle("topOfTheLine");
}

function contactToggle() {
  if (document.getElementById("about").classList.contains("topOfTheLine")) {
    aboutToggle();
  }
  if (document.getElementById("info").classList.contains("topOfTheLine")) {
    infoToggle();
  }
  document.getElementById("contact").classList.toggle("topOfTheLine");
}

function infoToggle() {
  if (document.getElementById("about").classList.contains("topOfTheLine")) {
    aboutToggle();
  }
  if (document.getElementById("contact").classList.contains("topOfTheLine")) {
    contactToggle();
  }
  document.getElementById("info").classList.toggle("topOfTheLine");
}

//Full screen function
var elem = document.documentElement;
var fc = document.getElementById("fullscreenButton");
fc.addEventListener("click", () => {
  if (fc.innerHTML == "Fullscreen") {
    openFullscreen();
    fc.innerHTML = "Exit";
    document.getElementById("fcIcon").classList.remove("bx-fullscreen");
    document.getElementById("fcIcon").classList.add("bx-exit-fullscreen");
  } else {
    closeFullscreen();
    fc.innerHTML = "Fullscreen";
    document.getElementById("fcIcon").classList.remove("bx-exit-fullscreen");
    document.getElementById("fcIcon").classList.add("bx-fullscreen");
  }
});

function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE11 */
    document.msExitFullscreen();
  }
}
