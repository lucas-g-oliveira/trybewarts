const btn = document.querySelector('body > header > form > button');
const email = document.querySelector('#emailInput');
const password = document.querySelector('#passwordInput');

const firstName = document.getElementById('input-name');
const lastName = document.getElementById('input-lastname');
const emailForm = document.getElementById('input-email');
const house = document.getElementById('house');
const family = document.getElementsByName('family');
const contentToLearn = document.getElementsByClassName('subject');
const avaliation = document.getElementsByName('rate');
const textArea = document.getElementById('textarea');
const countChar = document.querySelector('#counter');
const divForm = document.getElementById('evaluation-form');

const checkBox = document.querySelector('#agreement');
const btnSubmit = document.querySelector('#submit-btn');

const fullNameReview = document.getElementById('fullNameReview');
const emailFormReview = document.getElementById('emailFormReview');
const houseReview = document.getElementById('houseReview');
const familyReview = document.getElementById('familyReview');
const contentToLearnReview = document.getElementById('contentToLearnReview');
const avaliationReview = document.getElementById('avaliationReview');
const textAreaReview = document.getElementById('textAreaReview');
const divFormReview = document.getElementById('form-data');

checkBox.addEventListener('click', () => {
  if (checkBox.checked) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
});

textArea.addEventListener('keyup', () => {
  countChar.innerText = 500 - textArea.value.length;
});

btn.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

function getRadioSelected(array) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index].checked === true) {
      return array[index].value;
    }
  }
  return ' Nenhum item foi selecionado!';
}

function joinListToString(listToString) {
  let joinned = '';
  for (let index = 0; index < listToString.length; index += 1) {
    joinned += (joinned.length === 0) ? listToString[index] : `, ${listToString[index]}`;
  }
  return joinned;
}

function getChechedOfSelect(array) {
  const result = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index].checked) {
      result.push(array[index].value);
    }
  }
  return result;
}

btnSubmit.addEventListener('click', (event) => {
  event.preventDefault();

  fullNameReview.innerText = `Nome: ${firstName.value} ${lastName.value}`;
  emailFormReview.innerText = `Email: ${emailForm.value}`;
  houseReview.innerText = `Casa: ${house.value}`;
  familyReview.innerText = `Família: ${getRadioSelected(family)}`;
  contentToLearnReview.innerText = `Matérias: ${
    joinListToString(getChechedOfSelect(contentToLearn))}`;
  avaliationReview.innerText = `Avaliação: ${getRadioSelected(avaliation)}`;
  textAreaReview.innerText = `Observações: ${textArea.value}`;

  divFormReview.style.display = 'flex';
  divFormReview.style.flexDirection = 'column';
  divForm.style.display = 'none';
});
