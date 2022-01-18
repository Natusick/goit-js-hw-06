const categoriesEl = document.querySelectorAll('.item');
const numberOfCategories = categoriesEl.length;
console.log('Number of categories:', numberOfCategories);

categoriesEl.forEach(function (element) { 
console.log('Category:', element.firstElementChild.textContent);


const elementsOfCategories = element.lastElementChild;
const numberOfElements = elementsOfCategories.querySelectorAll('li'); 
console.log('Elements:', numberOfElements.length);
  
});



