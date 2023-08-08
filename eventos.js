const divmessage = document.getElementById("divMessage");
const buttonMessage = document.querySelector("button");

function mensajeButton() {
  alert("Hola!");
}
buttonMessage.addEventListener("click", () => {
  mensajeButton();
});

function saludoDiv() {
  alert("Hola! Soy el div");
}
divmessage.addEventListener("click", () => {
  saludoDiv();
});
