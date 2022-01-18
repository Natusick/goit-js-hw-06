const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl = document.querySelectorAll('#ingredients');

const listOfIngredients = ingredients.map(ingredient => {
const list = document.createElement("li");
list.textContent = ingredient;
list.classList.add('item');
console.log(list);


});


ingredientsEl.append(...listOfIngredients);
