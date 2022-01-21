const refs = {
  inputEl: document.querySelector("#controls input"),
  buttonCreate: document.querySelector("#controls button[data-create]"), 
  buttonDestroy: document.querySelector("#controls button[data-destroy]"),
  boxesEl: document.querySelector("#boxes"),

};

refs.buttonCreate.addEventListener('click', (event) => {
  event.preventDefault();

  let basicWidth = 30;
  let basicHeight = 30;

  for (let i = 0; i < refs.inputEl.value; i += 1) {
      const newEl = document.createElement("div");
        newEl.style.width = `${(basicWidth += 10)}px`;    
        newEl.style.height = `${(basicHeight += 10)}px`;   
        newEl.style.backgroundColor = `${getRandomHexColor()}`;    
             
        refs.boxesEl.append(newEl);   
      } 
        refs.inputEl.value = "";
  });

refs.buttonDestroy.addEventListener(`click`, (event)=>{
  refs.boxesEl.innerHTML =``;
  refs.inputEl.value = "";
  refs.boxesEl.remove();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}





