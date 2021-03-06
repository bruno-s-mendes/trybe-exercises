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