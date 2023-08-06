const divmessage = document.getElementsById("divMessage");

function saludoDiv() {
  alert("qwer");
}

divmessage.addEventListener("click", () => {
  saludoDiv();
  saludoDiv.stopPropagation();
});
