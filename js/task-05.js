
const refs = {
nameInputEl: document.querySelector('[id="name-input"]'),
nameOutputEl: document.querySelector('[id="name-output"]'),
};

refs.nameInputEl.addEventListener('input', onInputChange);
function onInputChange(event){
    console.log(event.currentTarget.value);
    refs.nameOutputEl.textContent = event.currentTarget.value;
};
  