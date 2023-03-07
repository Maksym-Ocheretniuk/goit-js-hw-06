const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// console.log(ingredients);

const mainListEl = document.querySelector("#ingredients");
// console.log(mainListEl);

const ingredientsListEl = ingredients.map(ingredient => {
  const listEl = document.createElement("li");
  listEl.textContent = ingredient;
  listEl.classList.add("item");
  // console.log(listEl);

  return listEl;
});

const allEl = ingredients => ingredientsListEl;

const elements = allEl(ingredients);

mainListEl.append(...elements);
