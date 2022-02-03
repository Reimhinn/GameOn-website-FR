function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const body = document.body;
const modalBody = document.querySelector(".modal-body");
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeX = document.querySelector(".close");
const modalForm = document.getElementById("modal-form");
const modalContent = document.querySelector('content')

const btnSubmit = document.querySelector(".btn-submit");

const successModal = document.getElementById("success-modal");
const confirmSuccess = document.querySelector(".confirm-success")


const firstName = document.getElementById("firstname")
const lastName = document.getElementById("lastname")
const email = document.getElementById("email")
const birthdate = document.getElementById("birthdate")
const quantity = document.getElementById("quantity")
const checkbox1 = document.getElementById("checkbox1");
const location1 = document.getElementById("location1")


let hasError = false;

// launch/close modal event

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

closeX.addEventListener("click", closeModal);
confirmSuccess.addEventListener("click", closeModal);

// launch/close modal form

function launchModal() {
  modalbg.style.display = "block";
  modalBody.style.display = "block"
  if (window.matchMedia("(max-width: 800px)").matches) {
    body.scrollIntoView();
    body.classList.add("body-responsive")
  }
}

function closeModal() {
  modalbg.style.display = "none";
  successModal.style.display = "none";
  clearInputs()
  body.classList.remove("body-responsive")
}
// validate inputs


// btnSubmit.addEventListener("click", checkForError)

modalForm.addEventListener('submit', function(e) {
  e.preventDefault();
})

modalbg.addEventListener("click", closeModal);

modalBody.addEventListener("click", function(e) {
  e.stopPropagation();
})

successModal.addEventListener("click", function(e) {
  e.stopPropagation();
})

function checkForError() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const birthdateValue = birthdate.value.trim();
  const quantityValue = quantity.value.trim();

  hasError = false;


  if (firstNameValue === "") {
    setError(firstName, 'Vous ne devez pas laisser le champ vide')
  } else if (firstNameValue.length < 2) {
    setError(firstName, 'Ce champ necessite au minimum 2 caractères')
  } else {
    if (firstNameValue.match(/([A-Za-z]{2,20})/gm)[0].length == firstNameValue.length) {
      setSuccess(firstName);
    } else {
      setError(firstName, 'Ces caractères ne sont pas autorisés')
    }

  }


  if (lastNameValue === "") {
    setError(lastName, 'Vous ne devez pas laisser le champ vide')
  } else if (lastNameValue.length < 2) {
    setError(lastName, 'Ce champ necessite au minimum 2 caractères')
  } else {
    if (lastNameValue.match(/([A-Za-z]{2,20})/gm)[0].length == lastNameValue.length) {
      setSuccess(lastName);
    } else {
      setError(lastName, 'Ces caractères ne sont pas autorisés')
    }
  }


  if (emailValue === "") {
    setError(email, 'Vous ne devez pas laisser le champ vide')
  } else if (!isEmail(emailValue)) {
    setError(email, "Cette adresse est invalide")
  } else {
    setSuccess(email);
  }

  if (birthdateValue === "") {
    setError(birthdate, "Vous devez indiquer votre date de naissance")
  } else {
    setSuccess(birthdate);
  }

  if (checkbox1.checked === false) {
    setError(checkbox1, "Vous devez accepter les conditions d'utilisation")
  } else {
    setSuccess(checkbox1);
  }

  if (quantityValue === "") {
    setError(quantity, "Vous devez entrer un nombre")
  } else {
    setSuccess(quantity);
  }

  if (!document.querySelector("input[name='location']:checked")) {
    setError(location1, "Vous devez sellectionnez une ville")
  } else {
      setSuccess(location1)
  }
}

function validate() {
  checkForError()
  console.log('gg')
  if (hasError === true) {
    console.log("mais vous fumez monsieur")
  } else {
    modalBody.style.display = "none"
    successModal.style.display = "flex"
    clearInputs()
  }
}


function setError (input, message) {
  let inputParent = input.parentElement;
  let errorMessage = inputParent.querySelector("span.error-message");

  errorMessage.innerText = message;
  input.style.borderColor = "red";
  hasError = true;
}

function setSuccess (input) {
  let inputParent = input.parentElement;
  let errorMessage = inputParent.querySelector("span.error-message");

  errorMessage.innerText = "";
  input.style.borderColor = "inherit";
}

function clearInputs() {
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  birthdate.value = "";
  quantity.value = "";
  checkbox1.checked = false;
  errorMessage.innerText = "";
}


// function validate() {
//   checkForError();
//   if (allErrorMessage.innerText === '') {
//     modalbg.style.display = "none"
//   }
// }

function isEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}