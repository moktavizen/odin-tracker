const emailInput = document.querySelector("#email");
const emailValidationSpan = document.querySelector("#email-validation");
const countryInput = document.querySelector("#country");
const countryValidationSpan = document.querySelector("#country-validation");
const postalCodeInput = document.querySelector("#postal-code");
const postalCodeValidationSpan = document.querySelector("#postal-code-validation");
const passwordInput = document.querySelector("#password");
const passwordConfirmationInput = document.querySelector("#password-confirmation");
const passwordValidationSpan = document.querySelector("#password-validation");
const passwordConfirmationValidationSpan = document.querySelector(
  "#password-confirmation-validation",
);
const formLogSpan = document.querySelector("#form-log");
const submitBtn = document.querySelector("#submit");
const userInfoForm = document.querySelector("#user-info");

function clearValidation(inputEl, outputEl) {
  inputEl.classList = "";
  outputEl.textContent = "";
}

function showValidation(inputEl, outputEl, string) {
  inputEl.classList = "invalid";

  if (inputEl.validity.valueMissing) {
    outputEl.textContent = `You need to enter ${string}`;
  } else if (inputEl.validity.typeMismatch) {
    outputEl.textContent = `Entered value needs to be ${string}`;
  } else if (inputEl.validity.tooShort) {
    outputEl.textContent = `Entered ${string} is too short`;
  }
}

function clearPasswordMatchValidation() {
  passwordInput.classList = "";
  passwordConfirmationInput.classList = "";
  passwordValidationSpan.textContent = "";
  passwordConfirmationValidationSpan.textContent = "";
}

function showPasswordMatchValidation() {
  passwordInput.classList = "invalid";
  passwordConfirmationInput.classList = "invalid";
  passwordValidationSpan.textContent = "Passwords did not match!";
  passwordConfirmationValidationSpan.textContent = "Passwords did not match!";
}

emailInput.addEventListener("input", () => {
  formLogSpan.textContent = "";

  if (emailInput.validity.valid) {
    clearValidation(emailInput, emailValidationSpan);
  } else {
    showValidation(emailInput, emailValidationSpan, "email");
  }
});

countryInput.addEventListener("input", () => {
  formLogSpan.textContent = "";

  if (countryInput.validity.valid) {
    clearValidation(countryInput, countryValidationSpan);
  } else {
    showValidation(countryInput, countryValidationSpan, "country");
  }
});

postalCodeInput.addEventListener("input", () => {
  formLogSpan.textContent = "";

  if (postalCodeInput.validity.valid) {
    clearValidation(postalCodeInput, postalCodeValidationSpan);
  } else {
    showValidation(postalCodeInput, postalCodeValidationSpan, "postal code");
  }
});

passwordInput.addEventListener("input", () => {
  formLogSpan.textContent = "";

  if (passwordInput.value === passwordConfirmationInput.value) {
    clearPasswordMatchValidation();
  } else {
    showPasswordMatchValidation();
  }

  if (passwordInput.validity.valid) {
    clearValidation(passwordInput, passwordValidationSpan);
  } else {
    showValidation(passwordInput, passwordValidationSpan, "password");
  }
});

passwordConfirmationInput.addEventListener("input", () => {
  formLogSpan.textContent = "";

  if (passwordInput.value === passwordConfirmationInput.value) {
    clearPasswordMatchValidation();
  } else {
    showPasswordMatchValidation();
  }

  if (passwordConfirmationInput.validity.valid) {
    clearValidation(passwordConfirmationInput, passwordConfirmationValidationSpan);
  } else {
    showValidation(passwordConfirmationInput, passwordConfirmationValidationSpan, "password");
  }
});

submitBtn.addEventListener("click", (e) => {
  if (userInfoForm.checkValidity()) {
    formLogSpan.textContent = "Log: High five!";
  } else if (!userInfoForm.checkValidity()) {
    if (!emailInput.validity.valid) {
      showValidation(emailInput, emailValidationSpan, "email");
    }
    if (!countryInput.validity.valid) {
      showValidation(countryInput, countryValidationSpan, "country");
    }
    if (!postalCodeInput.validity.valid) {
      showValidation(postalCodeInput, postalCodeValidationSpan, "postal code");
    }
    if (!passwordInput.validity.valid) {
      showValidation(passwordInput, passwordValidationSpan, "password");
    }
    if (!passwordConfirmationInput.validity.valid) {
      showValidation(passwordConfirmationInput, passwordConfirmationValidationSpan, "password");
    }

    formLogSpan.textContent = "Log: Invalid form";
    e.preventDefault();
  }
});
