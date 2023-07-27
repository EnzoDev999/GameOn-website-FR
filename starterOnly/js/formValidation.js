// DOM ELEMENTS FORM FIELDS VALIDATION
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const allLocations = document.getElementById("allLocations");
const locations = document.querySelectorAll("#allLocations .checkbox-input");
const checkbox1 = document.getElementById("checkbox1");
const input = document.getElementsByClassName("text-control");
const form = document.getElementById("form");

// only alphabetical letters (no spaces or special characters)
const regex = /^[a-zA-Z]+$/;

// ------ FORM FIELDS VALIDATION ------ //
// NAMES CHECK (FIRST NAME AND LAST NAME)
function checkFirstName() {
  if (
    firstName.value.trim().length < 2 ||
    firstName.value.trim() === "" ||
    !firstName.value.match(regex)
  ) {
    // Validation échouée
    firstName.parentElement.dataset.errorVisible = "true";
    firstName.classList.remove("validationSuccess");
    firstName.classList.add("error");
    return false;
  }
  // Validation réussie
  firstName.parentElement.dataset.errorVisible = "false";
  firstName.classList.remove("error");
  firstName.classList.add("validationSuccess");
  return true;
}

function checkLastName() {
  if (
    lastName.value.trim().length < 2 ||
    lastName.value.trim() === "" ||
    !lastName.value.match(regex)
  ) {
    lastName.parentElement.dataset.errorVisible = "true";
    lastName.classList.remove("validationSuccess");
    lastName.classList.add("error");
    return false;
  }
  lastName.parentElement.dataset.errorVisible = "false";
  lastName.classList.remove("error");
  lastName.classList.add("validationSuccess");
  return true;
}

// EMAIL CHECK
function checkEmail() {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.value.trim().match(re)) {
    email.parentElement.dataset.errorVisible = "false";
    email.classList.remove("error");
    email.classList.add("validationSuccess");
    return true;
  }
  email.parentElement.dataset.errorVisible = "true";
  email.classList.remove("validationSuccess");
  email.classList.add("error");
  return false;
}

// BIRTHDATE CHECK
function checkBirthdate() {
  if (birthdate.value.trim().length !== 10) {
    birthdate.parentElement.dataset.errorVisible = "true";
    birthdate.classList.remove("validationSuccess");
    birthdate.classList.add("error");
    return false;
  }
  birthdate.parentElement.dataset.errorVisible = "false";
  birthdate.classList.remove("error");
  birthdate.classList.add("validationSuccess");
  return true;
}

// NUMBER OF TOURNAMENTS CHECK
function checkTournamentsQuantity() {
  if (
    quantity.value.trim().length === 0 || // Vérifie si la valeur est vide ou ne contient que des espaces
    isNaN(quantity.value.trim()) || // Vérifie si la valeur n'est pas un nombre
    quantity.value.trim() < 0 // Vérifie si la valeur est inférieure à zéro
  ) {
    quantity.parentElement.dataset.errorVisible = "true";
    quantity.classList.remove("validationSuccess");
    quantity.classList.add("error");
    return false; // Ajoutez cette ligne pour arrêter la validation en cas d'erreur
  }

  // Si la valeur est valide, effacez les marqueurs d'erreur et ajoutez la classe de validation
  quantity.parentElement.dataset.errorVisible = "false";
  quantity.classList.remove("error");
  quantity.classList.add("validationSuccess");
  return true;
}

// LOCATIONS CHECK
function checkLocations() {
  allLocations.dataset.errorVisible = "true";
  for (let i = 0; i < locations.length; i++) {
    if (locations[i].checked) {
      allLocations.dataset.errorVisible = "false";
      return true;
    }
  }

  return false;
}

// TERMS OF USE CHECK CHECK
function checkCheckBox() {
  if (checkbox1.checked === false) {
    checkbox1.parentElement.dataset.errorVisible = "true";
    return false;
  }
  {
    checkbox1.parentElement.dataset.errorVisible = "false";
    return true;
  }
}

// FORM FIELDS EVENTS
function formFieldsValidation(element, method, event) {
  element.addEventListener(event, method);
}
formFieldsValidation(firstName, checkFirstName, "focusout");
formFieldsValidation(lastName, checkLastName, "focusout");
formFieldsValidation(email, checkEmail, "focusout");
formFieldsValidation(birthdate, checkBirthdate, "focusout");
formFieldsValidation(quantity, checkTournamentsQuantity, "focusout");
formFieldsValidation(allLocations, checkLocations, "change");
formFieldsValidation(checkbox1, checkCheckBox, "change");

// FOR ALL FIELDS VALIDATION
function forAllFieldsValidation() {
  checkFirstName();
  checkLastName();
  checkEmail();
  checkBirthdate();
  checkTournamentsQuantity();
  checkLocations();
  checkCheckBox();
}

function formValidation() {
  if (
    checkFirstName() === true &&
    checkLastName() === true &&
    checkEmail() === true &&
    checkBirthdate() === true &&
    checkTournamentsQuantity() === true &&
    checkLocations() === true &&
    checkCheckBox() === true
  ) {
    return true;
  }
  return false;
}

// SEND FORM
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (formValidation() == true) {
    displayModalSubmit();
    document.querySelector("form").reset();
  } else {
    forAllFieldsValidation();
  }
});
