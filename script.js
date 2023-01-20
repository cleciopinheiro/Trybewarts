const btnLogin = document.getElementById('btn-login');
const btnSubmit = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');
const contador = document.getElementById('counter');
const textarea = document.getElementById('textarea');

const vName = document.getElementById('input-name');
const vLastName = document.getElementById('input-lastname');
const vEmail = document.getElementById('input-email');
const vHouse = document.getElementById('house');
const vFamily = document.querySelectorAll('input[name="family"]');
const vSubject = document.querySelectorAll('.subject');
const vRate = document.querySelectorAll('input[name="rate"]');

const getFamily = () => {
  let nameFamily = '';
  for (let i = 0; i < vFamily.length; i += 1) {
    if (vFamily[i].checked) {
      nameFamily = vFamily[i].value;
    }
  }
  return nameFamily;
};

const getSubject = () => {
  const subjects = [];
  for (let i = 0; i < vSubject.length; i += 1) {
    if (vSubject[i].checked) {
      subjects.push(vSubject[i].value);
    }
  }
  return subjects.join(', ');
};

const getRate = () => {
  let rate = '';
  for (let i = 0; i < vRate.length; i += 1) {
    if (vRate[i].checked) {
      rate = vRate[i].value;
    }
  }
  return rate;
};

btnLogin.addEventListener('click', () => {
  const email = document.getElementById('email');
  const senha = document.getElementById('password');
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

agreement.addEventListener('change', () => {
  if (agreement.checked) {
    btnSubmit.removeAttribute('disabled');
  } else {
    btnSubmit.setAttribute('disabled', false);
  }
});

textarea.addEventListener('keyup', () => {
  contador.innerHTML = +(500 - textarea.value.length);
});

function createDatas(objValue) {
  const sectionForm = document.querySelector('#form-data');
  sectionForm.style.width = '675px';
  sectionForm.style.borderRadius = '5px';
  sectionForm.style.backgroundColor = '#ffefbe';
  sectionForm.style.padding = '200px 0';
  sectionForm.style.justifyContent = 'center';
  sectionForm.style.alignItems = 'center';
  sectionForm.style.gap = '32px';

  for (let index = 0; index < objValue.length; index += 1) {
    const span = document.createElement('span');
    span.innerText = objValue[index];
    sectionForm.appendChild(span);
  }
}
const form = document.getElementById('evaluation-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const objValue = [
    `Nome: ${vName.value} ${vLastName.value}`,
    `Email: ${vEmail.value}`,
    `Casa: ${vHouse.value}`,
    `Família: ${getFamily()}`,
    `Matérias: ${getSubject()}`,
    `Avaliação: ${getRate()}`,
    `Observações: ${textarea.value}`,
  ];
  createDatas(objValue);
  form.style.display = 'none';
});
