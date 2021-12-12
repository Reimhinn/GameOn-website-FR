function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalBody = document.querySelector(".modal-body");
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeX = document.querySelector(".close");
const modalForm = document.getElementById("modal-form");
const btnSubmit = document.querySelector(".btn-submit");
const checkbox1 = document.getElementById("checkbox1");
const firstName = document.getElementById("first-name")
const lastName = document.getElementById("last-name")
const email = document.getElementById("email")
const birthdate = document.getElementById("birthdate")
const quantity = document.getElementById("quantity")
const errorConditions = document.querySelector(".error-conditions")
const errorFirstName = document.querySelector(".error-firstname")
const errorLastname = document.querySelector(".error-lastname")
const errorEmail = document.querySelector(".error-email")
const errorBirthdate = document.querySelector(".error-birthdate")
const successMessage = document.querySelector(".success-message")


// launch/close modal event

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

closeX.addEventListener("click", closeModal);

// launch/close modal form

function launchModal() {
  modalbg.style.display = "block";
}

function closeModal() {
  modalbg.style.display = "none";
}

// validate inputs


btnSubmit.addEventListener("click", checkForError)

// function validated() {

// }

modalForm.addEventListener('submit', function() {
  modalBody.innerHTML("<p>test</p>")
})

function checkForError() {
  // const firstNameValue = firstName.value.trim();
  // const lastNameValue = lastName.value.trim();
  // const emailValue = email.value.trim();
  // const birthdate = birthdate.value.trim();
  // const quantityValue = quantity.value.trim();

  if (checkbox1.checked === false) {
    errorConditions.style.display = "inline";
    errorConditions.innerHTML = "vous devez accepter les conditions d'utilisation"
  }
  else {
    errorConditions.style.display = "none";
  }

  // if (firstNameValue === "") {
  //   errorFirstName.style.display = "inline";
  //   errorFirstName.innerHTML = "vous ne pouvez pas laisser cette case vide"
  // }
}