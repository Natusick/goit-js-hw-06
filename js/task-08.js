const formEl = document.querySelector("form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return (alert ("Please fill in all the fields!"));
  }
  
  console.log(email.value, password.value);
  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}



