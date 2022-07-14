const btn = document.querySelector('body > header > form > button');
const email = document.querySelector('#emailInput');
const password = document.querySelector('#passwordInput');
const btnSubmit = document.querySelector('#submit-btn');
const checkBox = document.querySelector('#agreement');

checkBox.addEventListener('click', () => {
  if (checkBox.checked) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
});

btn.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
