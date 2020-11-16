const inputName = document.querySelector('.input_name');
const inputEmail = document.querySelector('.input_email');
const inputPassword = document.querySelector('.input_password');
const inputConfirmPassword = document.querySelector('.input_confirm-password');
const formBtn = document.querySelector('.form_btn');
const completeMessageName = document.querySelector('.complete_message-name');
const completeMessageEmail = document.querySelector('.complete_message-email');
const completeMessagePassword = document.querySelector(
  '.complete_message-password'
);
const completeMessageConfirmPassword = document.querySelector(
  '.complete_message-confirm-password'
);
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
    successValid(inputName, alertMessageName, completeMessageName);
  } else {
    failValid(inputName, alertMessageName, completeMessageName);
  }

  if (valueEmail.match(pattern)) {
    successValid(inputEmail, alertMessageEmail, completeMessageEmail);
  } else {
    failValid(inputEmail, alertMessageEmail, completeMessageEmail);
  }

  if (valuePassword.length >= 6) {
    successValid(inputPassword, alertMessagePassword, completeMessagePassword);
  } else {
    failValid(inputPassword, alertMessagePassword, completeMessagePassword);
  }

  if (
    valueConfirmPassword === valuePassword &&
    valueConfirmPassword.length >= 6
  ) {
    successValid(
      inputConfirmPassword,
      alertMessageConfirmPassword,
      completeMessageConfirmPassword
    );
  } else {
    failValid(
      inputConfirmPassword,
      alertMessageConfirmPassword,
      completeMessageConfirmPassword
    );
  }
}

function successValid(validation, messageAlert, messageComplete) {
  validation.classList.add('success');
  validation.classList.remove('fail');
  messageAlert.style.display = 'none';
  messageComplete.style.display = 'block';
}

function failValid(validation, messageAlert, messageComplete) {
  validation.classList.add('fail');
  validation.classList.remove('success');
  messageAlert.style.display = 'block';
  messageComplete.style.display = 'none';
}
