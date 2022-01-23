
const refs = {
nameInputEl: document.querySelector('[id="name-input"]'),
nameOutputEl: document.querySelector('[id="name-output"]'),
};

refs.nameInputEl.addEventListener('input', onInputChange);

function onInputChange(event){
    if(event.currentTarget.value === ''){  
        return (refs.nameOutputEl.textContent = `Anonymous`); 
    } 
        
        console.log(event.currentTarget.value);
        refs.nameOutputEl.textContent = event.currentTarget.value;
     
};
