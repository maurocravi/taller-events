const divmessage = document.getElementById("divMessage");
function saludoDiv() {
  alert("Hola! Soy el div");
}
divmessage.addEventListener("click", () => {
  saludoDiv();
});

const buttonMessage = document.querySelector("button");
function mensajeButton() {
  alert("Hola!");
}
buttonMessage.addEventListener("click", () => {
  mensajeButton();
});
