let word = 'be trybe';
let separado = word.split(' ');

console.log (separado);

let word = ['Bruno', 'luiza', 'isabella', 'claudia'];
let lastNum = word.length -1
let concatInt = [word[lastNum], word[0]];
let algo = concatInt.join(',');
let first = word[0];
let last = word[lastNum];
console.log (first);
console.log (last);
console.log(algo);

function catAndMouse(mouse, cat1, cat2) {
  let dist1 = cat1 - mouse;
  let dist2 = cat2 - mouse;
  let result;
  if (dist1 > dist2) {
    result = 'cat2';
  } else if (dist2 > dist1) {
    result = 'cat1';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}
console.log(catAndMouse(0, 3, 2));
console.log(catAndMouse(10, 4, 22));
console.log(catAndMouse(1, 0, 2));

// função complementar exercicio 8 para ver se numero é divisivel por 3
function numbDiv3(num) {
  let result = false;
  if (num % 3 === 0) {
    result = true;
  }
  return result;
}

// função complementar exercicio 8 para ver se numero é divisivel por 5
function numbDiv5(num) {
  let result = false;
  if (num % 5 === 0) {
    result = true;
  }
  return result;
}

// função complementar ao exercicio 8 para decidir qual palavra guardar no array
function writeArray(value) {
  let result;
  if (numbDiv3(value) === true && numbDiv5(value) === true) {
    result = 'fizzBuzz';
  } else if (numbDiv3(value) === true) {
    result = 'fizz';
  } else if (numbDiv5(value) === true) {
    result = 'buzz';
  } else {
    result = 'bug!';
  }
  return result;
}

// Desafio 8
function fizzBuzz(array) {
  let result = [''];
  for (let index; index < array.length; index += 1) {
    result.push(writeArray(array[index]));
  }
  return result;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));
// função complementar exercicio 8 para ver se numero é divisivel por 3
function numbDiv3(num) {
    let result = false;
    if (num % 3 === 0) {
      result = true;
    }
    return result;
  }
  
  // função complementar exercicio 8 para ver se numero é divisivel por 5
  function numbDiv5(num) {
    let result = false;
    if (num % 5 === 0) {
      result = true;
    }
    return result;
  }
  
  // função complementar ao exercicio 8 para decidir qual palavra guardar no array
  function writeArray (value) {
    let result;
    if (numbDiv3(value) === true && numbDiv5(value) === true) {
      result = 'fizzBuzz';
    } else if (numbDiv3(value) === true) {
      result = 'fizz';
    } else if (numbDiv5(value) === true) {
      result = 'buzz';
    } else {
      result = 'bug!';
    }
    return result;
  }
  
  // Desafio 8
  function fizzBuzz(array) {
    let result = [];
    for (let index in array) {
      result.push(writeArray(array[index]));
    }
    return result;
  }
  console.log(fizzBuzz([2, 15, 7, 9, 45]));

  // auxiliar desafio 9 
function replace(char) {
  let vog = ['a', 'e', 'i', 'o', 'u'];
  let numb = ['1', '2', '3', '4', '5'];
  for (let index = 0; index < vog.length; index += 1) {
    if (char === vog[index]) {
      char = numb[index];
    }
  }
  return char;
}
console.log(replace('o'));

// Desafio 9
function encode(string) {
  let array = string.split(''); 
  let result = '';
  for (let index = 0; index < array.length; index += 1) {
    result += replace(array[index]);
  }
  return result;
}

console.log(encode('br5n4 é l2g1l'));

// Desafio 10
function techList(list, name) {
  let result;
  if (list.length === 0) {
    result = 'Vazio!';
  } else {
    list = list.sort();
    result = [];
    for (let index = 0; index < list.length; index += 1) {
      let tech = list[index];
      let item = {
        tech,
        name,
      };
      result.push(item);
    }
  }
  return result;
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Lucas'));
console.log(techList([], 'Lucas'));

let var1, var2, var3;

// função auxiliar exercico 11
function repeat3Times(array) {
  let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let result = false;
  for (let index = 0; index < array.length; index += 1) {
    count[array[index]] += 1;
  }
  for (let index = 0; index < count.length; index += 1) {
    if (count[index] >= 3) {
      result = true;
    }
  }
  return result;
}

// função auxiliar exercicio 11
function checkRange(array) {
  let result = true;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9) {
      result = false;
    }
  }
  return result;
}

// função auxiliar exercicio 11
function createPhone(array) {
  return '(' + array[0] + array[1] + ')' + array[2] + array[3] + array[4] + array[5] + array[6] + '-' + array[7] + array[8] + array[9] + array[10];
}

// Desafio 11
function generatePhoneNumber(array) {
  let result;
  if (array.length === 11 && checkRange(array) === true && repeat3Times(array) === false) {
    result = createPhone(array);
  } else if (array.length !== 11) {
    result = 'Array com tamanho incorreto.';
  } else if (checkRange(array) === false || repeat3Times(array) === true) {
    result = 'não é possível gerar um número de telefone com esses valores';
  }
  return result;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 1, 7, 8, 9, 0, 1]));

// função auxiliar exercicio 12 verifica se um lado é menor do que a soma dos outro dois
function verifySum(lineA, lineB, lineC) {
  let result = false;
  if (lineA < (lineB + lineC)) {
    result = true;
  }
  return result;
}

// função auxiliar verifia se a soma dos dois lados é maior do que a diferenca em valor absoluto
function verifyDiff(lineA, lineB, lineC) {
  let result = false;
  if (lineA > Math.abs(lineB - lineC)) {
    result = true;
  }
  return result;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let result = false;
  if (verifyDiff(lineA, lineB, lineC) === true && verifySum(lineA, lineB, lineC) == true) {
    result = true;
  }
  return result;
}
console.log(triangleCheck(10, 14, 8))

// auxiliar desafio 13 recebe uma string, trnasforma em array e conta os numeros
function sumWater(string) {
  let array = string.split('');
  let sum = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] >= 0 && array[index] <= 9) {
      let int = Math.abs(array[index]);
      sum += int;
    }
  }
  return sum;
}

// Desafio 13
function hydrate(string) {
  let sum = sumWater(string);
  let result;
    if (sum === 1) {
      result = '1 copo de água';
    } else if (sum > 1) {
      let num = sum.toString();
      result = num.concat(' copos de água');
    }
  return result;
}
console.log(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho"));

function createPhone(array) {
  let num1, num2, num3;
  let str1 = '(';
  let str2 = ') ';
  let str3 = '-';
  let part1 = array.slice(0, 2);
  let part2 = array.slice(2, 7);
  let part3 = array.slice(7, 11);
  num1 = part1.join('');
  num2 = part2.join('');
  num3 = part3.join('');
  return str1.concat(num1, str2, num2, str3, num3)
}
console.log(createPhone([1, 2, 3, 4, 5, 1, 7, 8, 9, 0, 1]));