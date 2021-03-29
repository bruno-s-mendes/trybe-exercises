const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const addTurno = (object, value) => object.turno = value;  

  addTurno(lesson2, 'manhã');

  const keyList = (object) => Object.keys(object);

  const objLength = (object) => Object.keys(object).length;

  const allLessons = {lesson1, lesson2, lesson3};

  const totalStudent = (object) => {
      const array = Object.keys(object);
      let soma = 0;
      for (let index = 0; index < array.length; index++) {
          const element = object[array[index]];
          soma += element.numeroEstudantes;
      }
      return soma;
  }
  const getValueByNumber = (object, number) => {
      const array = Object.keys(object);
      return object[array[number]];
  }

  const verifyPair = (object, key, value) => {
      const array = Object.keys(object);
      for (let index = 0; index < array.length; index++) {
          const element = array[index];
          if (element === key) {
              if (object[element] === value){
                  return true;
              } return false;
          }
      }
  }

  const createReport = (object, professor) => {
    const array = Object.keys(object);
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        const element = object[array[index]];
        if (element.professor === professor){
            sum += element.numeroEstudantes;
        }
    }
    return sum;
  }

  console.log(lesson2);
  console.log(keyList(lesson1));
  console.log(objLength(lesson1));
  console.log(allLessons);
  console.log(totalStudent(allLessons));
  console.log(getValueByNumber(lesson1, 0));
  console.log(verifyPair(lesson1, 'turno', 'manhã'));
  console.log(createReport(allLessons, 'Maria Clara'))
  