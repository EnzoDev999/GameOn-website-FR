// DOM ELEMENTS MODAL
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.getElementsByClassName("close");

// ------ DISPLAY MODAL ------ //
// LAUNCH MODAL EVENTS
modalBtn.forEach((btn) =>
  btn.addEventListener("click", function () {
    launchModal();
    scrollToTop();
  })
);

// LAUNCH MODAL FORM
function launchModal() {
  modalbg.style.display = "block";
  document.body.classList.add("modal-open"); // Ajoute la classe "modal-open" pour empêcher le défilement du contenu principal
}

// Fonction pour remonter la page tout en haut
function scrollToTop() {
  window.scrollTo(0, 0);
}

// CLOSE MODAL FORM
function closeModal() {
  modalbg.style.display = "none";
  document.body.classList.remove("modal-open"); // Retire la classe "modal-open" pour réactiver le défilement du contenu principal
}
closeBtn[0].addEventListener("click", closeModal);

// ------ DISPLAY NAV RESPONSIVE ------ //
// EDIT NAV
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
