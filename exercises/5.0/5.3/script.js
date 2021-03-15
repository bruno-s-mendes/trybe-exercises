function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let lista = document.querySelector('#days');
  for (let index = 0; index < dezDaysList.length; index +=1) {
      if (dezDaysList[index] === 24 || dezDaysList[index] === 31) {
          let text = dezDaysList[index];
          let listItem = document.createElement('li')
          listItem.className = 'day holiday'
          listItem.innerText = text;
          lista.appendChild(listItem);
      } else if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18) {
          let text = dezDaysList[index];
          let listItem = document.createElement('li')
          listItem.className = 'day friday'
          listItem.innerText = text;
          lista.appendChild(listItem);
      } else if (dezDaysList[index] === 25 ) {
          let text = dezDaysList[index];
          let listItem = document.createElement('li')
          listItem.className = 'day holiday friday'
          listItem.innerText = text;
          lista.appendChild(listItem);
      } else {
          let text = dezDaysList[index];
          let listItem = document.createElement('li')
          listItem.className = 'day'
          listItem.innerText = text;
          lista.appendChild(listItem);
      }

  }

 function createButton (Feriados) {
     let botao = document.createElement('button');
     botao.id = 'btn-holiday';
     botao.innerText = Feriados;
     document.querySelector(".buttons-container").appendChild(botao);
    }
 
 createButton("Feriados");

 function displayHolidays() {
    let but = document.querySelector('#btn-holiday');
    let holi = document.querySelectorAll('.holiday');
    let originalColor = 'rgb(238,238,238)';
    let newColor = 'pink';
    
    but.addEventListener('click', function(){
        for (let index = 0; index < holi.length; index += 1) {
            if (holi[index].style.backgroundColor === newColor) {
                holi[index].style.backgroundColor = originalColor;
               } else {
                holi[index].style.backgroundColor = newColor;
               }
            }
       }) 
   };
   
   displayHolidays();

    function createButtonFriday (name) {
     let botao = document.createElement('button');
     botao.id = 'btn-friday';
     botao.innerText = name;
     document.querySelector(".buttons-container").appendChild(botao);
    }
 
 createButtonFriday("Sexta-feira");
  let fri = document.querySelectorAll('.friday');
  let originalText = [];
  for (let index = 0; index < fri.length; index += 1) {
      let inner = fri[index].textContent;
      originalText.push(inner);
  }
  
  function displayFridays() {
    let but = document.querySelector('#btn-friday');
    let newText = 'Sextou!';
    
    but.addEventListener('click', function(){
        for (let index = 0; index < fri.length; index += 1) {
            if (fri[index].textContent === newText) {
                fri[index].innerText = originalText[index];
               } else {
                fri[index].innerText = newText;
               }
            }
       }) 
   };
   
   displayFridays();

   function mouseOver() {
    let day = document.querySelector('#days');

        day.addEventListener('mouseover', function(event) {
            event.target.style.fontSize = '40px';
        })
   };
   function mouseOut() {
    let day = document.querySelector('#days');

        day.addEventListener('mouseout', function(event) {
            event.target.style.fontSize = '20px';
        })
   };

   mouseOver();
   mouseOut();

   let add = document.querySelector('#btn-add');
   add.addEventListener('click', function () {
       let text = document.querySelector('#task-input');
       let task = document.createElement('span');
       task.innerText = text.value;
       document.querySelector(".my-tasks").appendChild(task);
    });
 
  function createColor(stringCor) {
      let task = document.querySelector('.my-tasks');
      let color = document.createElement('div');
      color.className = 'task';
      color.style.backgroundColor = stringCor;
      task.appendChild(color);
  }

  createColor('orange');

  function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');

  myTasks.addEventListener('click', function() {
    if (selectedTask.length === 0) {
      myTasks.className = 'task selected';
    } else {
      myTasks.className = 'task';
    }
  });
};

setTaskClass();

   let newEvent = document.querySelector('#days');
   newEvent.addEventListener('click', function () {
       let text = document.querySelector('#task-input');
       let task = document.createElement('span');
       task.innerText = text.value;
       document.querySelector(".my-tasks").appendChild(task);
    });
 
  