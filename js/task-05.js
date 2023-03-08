const nameInputEl = document.querySelector("#name-input");
const nameUserEl = document.querySelector("#name-output");

nameInputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (nameInputEl.value !== "") {
    nameUserEl.textContent = event.currentTarget.value;
  } else {
    nameUserEl.textContent = "Anonymous";
  }
}
