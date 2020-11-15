const inputName = document.querySelector('.input_name');
const inputEmail = document.querySelector('.input_email');
const inputPassword = document.querySelector('.input_password');
const inputConfirmPassword = document.querySelector('.input_confirm-password');
const formBtn = document.querySelector('.form_btn');
const alertMessageName = document.querySelector('.alert_message-name');
const alertMessageEmail = document.querySelector('.alert_message-email');
const alertMessagePassword = document.querySelector('.alert_message-password');
const alertMessageConfirmPassword = document.querySelector(
  '.alert_message-confirm-password'
);

formBtn.addEventListener('click', e => {
  e.preventDefault();

  inputValues();
});

function inputValues() {
  const valueName = inputName.value;
  const valueEmail = inputEmail.value;
  const valuePassword = inputPassword.value;
  const valueConfirmPassword = inputConfirmPassword.value;
  var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  if (valueName.length >= 6) {
    successValid(inputName, alertMessageName);
  } else {
    failValid(inputName, alertMessageName);
  }

  if (valueEmail.match(pattern)) {
    successValid(inputEmail, alertMessageEmail);
  } else {
    failValid(inputEmail, alertMessageEmail);
  }

  if (valuePassword.length >= 6) {
    successValid(inputPassword, alertMessagePassword);
  } else {
    failValid(inputPassword, alertMessagePassword);
  }

  if (
    valueConfirmPassword === valuePassword &&
    valueConfirmPassword.length >= 6
  ) {
    successValid(inputConfirmPassword, alertMessageConfirmPassword);
  } else {
    failValid(inputConfirmPassword, alertMessageConfirmPassword);
  }
}

function successValid(validation, message) {
  validation.classList.add('success');
  validation.classList.remove('fail');
  message.style.display = 'none';
}

function failValid(validation, message) {
  validation.classList.add('fail');
  validation.classList.remove('success');
  message.style.display = 'block';
}
