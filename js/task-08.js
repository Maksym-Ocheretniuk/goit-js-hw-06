const formEl = document.querySelector(".login-form");

console.dir(formEl.elements);

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const mailEl = formElements.email.value;
  const passwordEl = formElements.password.value;

  if (!mailEl || !passwordEl) {
    alert("Не всі поля заповнено! Будь ласка, заповніть всі поля форми!");
  } else {
    const formData = { mail: mailEl, password: passwordEl };

    console.log(formData);

    event.currentTarget.reset();
  }
}
