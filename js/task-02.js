const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl = document.querySelector('#ingredients');

const listOfIngredients = ingredients.map(ingredient => {
const list = document.createElement("li");
list.textContent = ingredient;
list.classList.add('item');
console.log(list);

return list;
});


ingredientsEl.append(...listOfIngredients);
