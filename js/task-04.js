const refs ={
 decrementBtn: document.querySelector('[data-action="decrement"]'),
 incrementBtn: document.querySelector('[data-action="increment"]'),
 valueEl: document.querySelector("#value"),
}
let counterValue = 0; 

const decrement = () => {
  counterValue -= 1; 
  document.getElementById('value').textContent = counterValue;
  };

const increment = () => {
  counterValue += 1; 
  document.getElementById('value').textContent = counterValue;
  };

  refs.incrementBtn .addEventListener('click', increment);
  refs.decrementBtn.addEventListener('click', decrement);
  
  

  