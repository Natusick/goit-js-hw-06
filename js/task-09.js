const refs = {
bodyEl: document.querySelector('body'),
spanEl: document.querySelector('span'),
buttonEl: document.querySelector('button'),
};

refs.buttonEl.addEventListener('input', bodyElChange);
function bodyElChange(event){
  refs.bodyEl.style.backgroundColor = currentColor;
  refs.spanEl.style.backgroundColor = currentColor;
    
};

const currentColor = () =>  {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};



