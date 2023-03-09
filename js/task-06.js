const inputEl = document.querySelector("#validation-input");

// console.dir(inputEl);

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur() {
  if (Number(inputEl.value.length) === Number(inputEl.dataset.length)) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }

  // console.log("value in input = ", Number(inputEl.value.length));
  // console.log("value must be = ", Number(inputEl.dataset.length));
}
