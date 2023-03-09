const inputFontSizeControlEl = document.querySelector("#font-size-control");

// console.dir(inputFontSizeControlEl);

const textEl = document.querySelector("#text");

inputFontSizeControlEl.addEventListener("input", onTextSizeControl);

function onTextSizeControl() {
  textEl.style.fontSize = inputFontSizeControlEl.value + "px";

  //   console.dir(inputFontSizeControlEl.value);
}
