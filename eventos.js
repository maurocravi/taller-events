const divmessage = document.getElementsById("divMessage");

function saludoDiv() {
  alert("Hola! Soy el div");
}

divmessage.addEventListener("click", () => {
  saludoDiv();
});
