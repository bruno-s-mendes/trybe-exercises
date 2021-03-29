// Exercicio 1

const email = (nome) => {
    const array = nome.toLowerCase().split(' ');
    let result = array[0];
    if (array.length > 0) {
        for (let index = 1; index < array.length; index++) {
            const element = array[index];
            result += `_${element}`;
        }
    }
    return result;
}

const person = (nome) => { 
    obj = {
        nomeCompleto: nome, 
        email: `${email(nome)}@trybe.com`,
    };
    return obj;
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  }
  return employees;
};

console.log(newEmployees(person));

//Exerciccio 2


const checkNumber = (number, draw) => number === draw;

const sorteio = (numero, callback) => {
    const random = Math.floor((Math.random() * 5) + 1);

    return callback(numero, random) ? 'Parabéns, você ganhou!': 'Tente novamente';
}

console.log(sorteio(1, checkNumber));

// Exercício 3

const correctAnswer = 'higher order function';
const userAnswer = 'HIGHER ORDER FUNCTION';

const checkAnswer = (correctAnswer) => (userAnswer) => correctAnswer.toLowerCase() === userAnswer.toLowerCase();

console.log(checkAnswer(userAnswer)(correctAnswer));

//Exercicio 4

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'A'];

const countPoint = (right, student) => {
    if (student === 'N.A') {
        return 0;
    } else if (student === right) {
        return 1;
    } return -0.5;
}

const totalPontos = (rightAnswers, studentAnswers, callback) => {
    let total = 0;
    for (let index = 0; index < rightAnswers.length; index += 1) {
        total += callback(rightAnswers[index], studentAnswers[index])
    }
    return total;
}

console.log(totalPontos(rightAnswers, studentAnswers, countPoint));