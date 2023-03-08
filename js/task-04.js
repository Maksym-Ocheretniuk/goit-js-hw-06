let counterValue = 0;
// console.log(counterValue);

const btnDecrementEl = document.querySelector('[data-action="decrement"]');
// console.log(btnDecrementEl);

const btnIncrementEl = document.querySelector('[data-action="increment"]');
// console.log(btnIncrementEl);

const valueEl = document.querySelector("#value");
// console.log(valueEl.textContent);

btnDecrementEl.addEventListener("click", minusValue);

btnIncrementEl.addEventListener("click", addValue);

function minusValue(event) {
  valueEl.textContent = counterValue -= 1;
}

function addValue(event) {
  valueEl.textContent = counterValue += 1;
}
