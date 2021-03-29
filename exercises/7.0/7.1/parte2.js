const fatorial = (number) => {
    let result = 1
    for (let index = 1; index <= number; index += 1) {
        result = result * index;
    }
    return result;
}

console.log(fatorial(4));

//exercicio 2

const longestWord = (phrase) => {
    const array = phrase.split(' ');
    let numbers = [];
    for (let index = 0; index < array.length; index += 1) {
        const element = array[index];
        numbers.push(element.length);
    }
    let max = 0;
    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        if (element > max) {
            max = element;
        }
    }
    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        if (element === max) {
            return array[index];
        }
        
    }       
}

console.log(longestWord('A luiza Vieira é o amor da minha vida'));
