const validationInput = document.querySelector('[id="validation-input"]');

console.log(validationInput.dataset.length);

validationInput.addEventListener('blur', onInputBlur);

function onInputBlur() {
  console.log(event.currentTarget.value.length);  
};

function onCloseClassInvalid() {
    validationInput.classList.remove('invalid');  
  };

  function onCloseClassValid() {
    validationInput.classList.remove('valid');  
  };
  

if(onInputBlur === Number(validationInput.dataset.length))
{
    
    validationInput.classList.add('valid');
    onCloseClassInvalid();
} 
 {
  validationInput.classList.add('invalid'); 
  onCloseClassValid();
};


console.log(validationInput);

