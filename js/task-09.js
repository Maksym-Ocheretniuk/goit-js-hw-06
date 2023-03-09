const bodyEl = document.querySelector("body");
const changeColorBtnEl = document.querySelector(".change-color");
const textColorEl = document.querySelector(".color");

changeColorBtnEl.addEventListener("click", onChangeColorBody);

function onChangeColorBody() {
  /* альтернативний розпис коду */
  // const newColor = getRandomHexColor();
  // bodyEl.style.backgroundColor = newColor;
  // textColorEl.textContent = newColor;

  textColorEl.textContent = bodyEl.style.backgroundColor = getRandomHexColor();

  // console.log("Body Color = ", bodyEl.style.backgroundColor);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
