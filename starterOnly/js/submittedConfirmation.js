// DOM ELEMENTS SUBMITTED CONFIRMATION
const modalSubmit = document.getElementsByClassName(
  "container-confirmation-submit"
);
const closeModalSubmit = document.getElementsByClassName("close-modal-submit");
const closeBtnConfirmation = document.getElementById("close-btn-confirmation");

// ------ SUBMITTED CONFIRMATION ------ //
// DISPLAY MODAL SUBMIT
function displayModalSubmit() {
  modalbg.style.display = "none";
  modalSubmit[0].style.display = "block";
}

// CLOSE SUBMIT
function closeSubmit() {
  // Reset form
  modalSubmit[0].style.display = "none";
  first.style.border = "none";
  last.style.border = "none";
  email.style.border = "none";
  birthdate.style.border = "none";
  quantity.style.border = "none";
  document.body.classList.remove("modal-open"); // Remove "modal-open" from the body to scroll
}

// EVENT CLOSE MODAL SUBMIT
closeModalSubmit[0].addEventListener("click", closeSubmit); // Close by the close button on top right
closeBtnConfirmation.addEventListener("click", closeSubmit); // Close by the "Fermer" button in front of the page
