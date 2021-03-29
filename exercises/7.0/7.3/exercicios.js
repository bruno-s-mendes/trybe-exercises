const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
assert.strictEqual(sum(4, 5), 9);
assert.strictEqual(sum(0,0),0);
sum(4,'5');

//Parte 2

const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);


// ex3

const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3),[1,2,4]);
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3),[1,2,3,4]);
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4],5,), [1,2,3,4]);

// ex4

const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui

assert.strictEqual(myFizzBuzz(3), 'fizz');
assert.strictEqual(myFizzBuzz(5), 'buzz');
assert.strictEqual(myFizzBuzz(15), 'fizzbuzz');

//ex5

const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui

assert.deepStrictEqual(obj1, obj3);

//PArte2 - ex1

const assert = require('assert');
// escreva a função addOne aqui

function addOne(array) {
    let output =[];
    for (let index = 0; index < array.length; index++) {
        const element = array[index] + 1;
        output.push(element);
    }
    return output;
};

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);

//parte 2 ex3

const assert = require('assert');
// escreva a função sumAllNumbers aqui

function sumAllNumbers(array) {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        sum += element;
    }
    return sum;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);

//parte 3 ex 1

const greetPeople = (people) => {
    let greeting = [];
    
    for (const person in people) {
        greeting.push(`Hello ${people[person]}`);
  }
  return greeting;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
//teste
const assert = require('assert');

assert.deepStrictEqual(greetPeople(parameter),result);

//parte 3 ex3

const greaterThanTen = (array) => {
    let results = [];
    for (let index = 0; index < array.length; index += 1) {
      if (array[index] > 10) {
        results.push(array[index]);
      }
    }
    return results;
  };
  
  const parameter = [4, 10, 32, 9, 21];
  const result = [32, 21];
  //teste 

const assert = require('assert');

assert.deepStrictEqual(greaterThanTen(parameter),result);

//parte 3 ex4

function secondThirdSmallest(array) {
    array.sort(function (x, y) {
        return x - y;
    });
    return [array[1], array[2]];
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];

//teste 

const assert = require('assert');

assert.deepStrictEqual(secondThirdSmallest(parameter),result);