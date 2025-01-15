import { sendData } from "./server";

const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  sendData(
    () => {
      alert("Ваше сообщение отправлено");
      form.reset();
    },
    alert,
    formData
  );
});
