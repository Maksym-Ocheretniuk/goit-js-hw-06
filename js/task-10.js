const inputEl = document.querySelector("#controls input");
const createBtnEl = document.querySelector("#controls [data-create]");
const destroyBtnEl = document.querySelector("#controls [data-destroy]");
const boxesEl = document.querySelector("#boxes");

// boxesEl.style.display = "flex";
// boxesEl.style.flexWrap = "wrap";
// boxesEl.style.alignItems = "center";

createBtnEl.addEventListener("click", onCreateBoxes);
destroyBtnEl.addEventListener("click", onDestroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onCreateBoxes(amount) {
  amount = Number(inputEl.value);
  let boxSize = 30;

  for (let i = 1; i <= amount; i += 1) {
    const divEl = document.createElement("div");
    divEl.style.width = `${boxSize}px`;
    divEl.style.height = `${boxSize}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    boxesEl.append(divEl);

    boxSize += 10;
  }
}

function onDestroyBoxes() {
  boxesEl.innerHTML = "";
  inputEl.value = "";
}

// const input = document.querySelector("#controls input");
// const createBtn = document.querySelector("#controls [data-create]");
// const destroyBtn = document.querySelector("#controls [data-destroy]");
// const boxesDiv = document.querySelector("#boxes");

// function createBoxes(amount) {
//   let size = 30;

//   for (let i = 1; i < amount; i += 1) {
//     const box = document.createElement("div");
//     box.style.width = `${size}px`;
//     box.style.height = `${size}px`;
//     box.style.backgroundColor = getRandomHexColor();
//     boxesDiv.append(box);
//     size += 10;
//   }
// }

// function destroyBoxes() {
//   boxesDiv.innerHTML = "";
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// createBtn.addEventListener("click", () => {
//   createBoxes(input.value);
// });

// destroyBtn.addEventListener("click", destroyBoxes);
