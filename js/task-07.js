const inputEl = document.querySelector('[id="font-size-control"]');
const textEl = document.querySelector('[id="text"]');

inputEl.addEventListener('input', onInputChange);
function onInputChange(event){
    textEl.style.fontSize = `${event.currentTarget.value}px`;
    
};
console.log(onInputChange);

