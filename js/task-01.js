const quantityLiItemEls = document.querySelectorAll(".item");
//
// console.log("!!!!! ARRAY: ", quantityLiItemEls);

// // Завдання 1 (1)

console.log("Number of categories: ", quantityLiItemEls.length);

// Завдання 1 (2)

const mainArrayEl = quantityLiItemEls.forEach(elem => {
  console.log("Category: ", elem.firstElementChild.textContent);
  console.log("Elements:", elem.lastElementChild.childElementCount);
});
