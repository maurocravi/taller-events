const divMessage = document.getElementById("divMessage"); // Seleccionamos el div

function saludoDiv() {
  alert("Hola! Soy el div");
}

divMessage.addEventListener("click", () => {
  saludoDiv();
});

// Agregamos el evento para evitar la propagación del clic en los elementos internos
divMessage.querySelectorAll("*").forEach((element) => {
  element.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});
