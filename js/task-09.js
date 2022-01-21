const refs = {
bodyEl: document.querySelector("body"),
spanEl: document.querySelector(".color"),
buttonEl: document.querySelector(".change-color"),
};

refs.buttonEl.addEventListener('click',bodyElChange );
  

function bodyElChange(event){
  const currentColor = getRandomHexColor();
  refs.spanEl.textContent = currentColor;
  refs.bodyEl.style.backgroundColor = currentColor;   
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


