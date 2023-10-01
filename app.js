"use strict";

const button = document.getElementById("button-submit");
const input = document.getElementById("input-text");
const errorLabel = document.getElementById("error-label");
const successButton = document.getElementById("success-button");
const container = document.getElementById("container");
const containerSuccess = document.getElementById("container-success");
const email = document.getElementById("success-info");

const inputCheck = (input) => {
  //Checking if the input value is not empty
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (
    input.value.length > 0 &&
    input.value !== "" &&
    input.value.match(validRegex)
  ) {
    removeStyles();
    containerSuccess.style.display = "flex";
    email.innerHTML = input.value;
  } else {
    addStyles();
  }
};

const removeStyles = () => {
  errorLabel.classList.remove("visible"); //If not, remove error classes from it
  input.classList.remove("error");
  container.style.display = "none";
};

const addStyles = () => {
  errorLabel.classList.add("visible"); //If yes, add error classes to it
  input.classList.add("error");
};

const resetValues = () => {
  email.innerHTML = "";
  input.value = "";
  container.style.display = "flex";
  containerSuccess.style.display = "none";
};

button.addEventListener("click", () => {
  inputCheck(input);
});

successButton.addEventListener("click", () => {
  resetValues();
});
