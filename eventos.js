const divmessage = document.getElementsById("divMessage");

function saludoDiv() {
  alert("Hola! Soy el div");
}

divmessage.addEventListener("click", () => {
  saludoDiv();
});

divmessage.querySelectorAll("*").forEach((element) => {
  element.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});
