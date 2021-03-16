function addStates() {
  //array de estados abaixo copidao de https://gist.github.com/castroalves/6021065#file-array-de-siglas-dos-estados-brasileiros
  const estados =["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];
  const stateList = document.getElementById('state');
  for (let index = 0; index < estados.length; index += 1) {
    const texto = estados[index];
    const element = document.createElement('option');
    element.value = texto;
    element.innerText = texto;    
    stateList.appendChild(element);
  }
}

function checkDate () {
  const date = document.getElementById('date').value
  const res = date.split('/');
  let result = '';
  if (res[0] < 0 || res[0] > 31) {
    result = 'Dia inválido';
  } else if (res[1] < 0 || res[1] > 12) {
    result = 'mês inválido';
  } else if (res[2] < 0) {
    result = 'ano inválido'
  }
  if (result !== '') {
    alert(result)
  }
}

function addResume() {
  const dataUser = document.querySelector('.data');
  const resumo = document.querySelector('textarea');
  const div = document.createElement('div');
  div.className = 'div-curriculum';
  div.innerHTML = resumo.value;
  dataUser.appendChild(div);
}

function renderCurriculum() {
  const formElements = document.querySelectorAll('input');
  const dataUser = document.querySelector('.data');
  for (let index = 0; index < formElements.length; index += 1) {
    if (formElements[index].type === 'radio' && !formElements[index].checked) {
      continue; // pula o elemento do tipo radio que nao foi selecionado
    }
    const userInput = formElements[index].value;
    const div = document.createElement('div');
    div.className = 'div-curriculum';
    div.innerHTML = userInput;
    dataUser.appendChild(div);
  }
  addResume();
}

function submit() {
  const sendBtn = document.querySelector('#submit-btn')
  sendBtn.addEventListener('click', () => {
    checkDate();
    renderCurriculum();
  });
}

function clear() {
  const resumo = document.querySelector('textarea');
  const formElements = document.querySelectorAll('input');
  const data = document.querySelector('.data');
  for (let index = 0; index < formElements.length; index += 1) {
    if (formElements[index].type === 'radio' ) {
      formElements[index].checked = false;
    }
    formElements[index].value = '';
  }
  resumo.value = '';
  while (data.hasChildNodes()) { // essa parte do código vi no w3school
    data.removeChild(data.firstChild);
  }
}

function btnClear() {
  const sendBtn = document.querySelector('#clear')
  sendBtn.addEventListener('click', () => {
    clear();
  });
}


window.onload = function run() {
  addStates();
  document.getElementById('myInputId').DatePickerX.init();
  btnClear();
}