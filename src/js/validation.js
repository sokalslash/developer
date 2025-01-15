const form = document.querySelector(".form");
const nameInput = form.querySelector("#name");
const emailInput = form.querySelector("#email");
const messageInput = form.querySelector("#message");

const errorNameContainer = form.querySelector("#name-errors");
const errorEmailContainer = form.querySelector("#email-errors");
const errorMessageContainer = form.querySelector("#message-errors");

const errorMessageRequired = "Поле обязательно для заполнения";
const errorMessageInvalidEmail =
  "Поле должно содержать символ @ и часть адреса после сивола @";

nameInput.setAttribute("required", true);
emailInput.setAttribute("required", true);
messageInput.setAttribute("required", true);

const getErrorMessage = (errorContainer, errorMessage) =>
  (errorContainer.textContent = errorMessage);

const deleteErrorMessage = (errorContainer) =>
  (errorContainer.textContent = "");

nameInput.addEventListener("invalid", (e) => {
  e.preventDefault();
  getErrorMessage(errorNameContainer, errorMessageRequired);
});
nameInput.addEventListener("input", (e) => {
  e.preventDefault();
  deleteErrorMessage(errorNameContainer);
});

emailInput.addEventListener("invalid", (e) => {
  e.preventDefault();
  getErrorMessage(errorEmailContainer, errorMessageInvalidEmail);
});
emailInput.addEventListener("input", (e) => {
  e.preventDefault();
  deleteErrorMessage(errorEmailContainer);
});

messageInput.addEventListener("invalid", (e) => {
  e.preventDefault();
  getErrorMessage(errorMessageContainer, errorMessageRequired);
});
messageInput.addEventListener("input", (e) => {
  e.preventDefault();
  deleteErrorMessage(errorMessageContainer);
});
