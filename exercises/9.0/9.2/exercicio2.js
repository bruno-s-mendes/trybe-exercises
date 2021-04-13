const promise = new Promise((resolve, reject) => {
    const array = [];
    for (let index = 0; index < 11; index += 1) {
        const element = Math.floor(Math.random() * 50);
        array.push(element*element);
    }
    const sum = array.reduce((result, number) => result +  number);
    (sum < 8000 ? resolve(sum) : reject());
})
// ex 2
// .then((valor) => console.log('Promise resolvida'))
// .catch((valor) => console.log('Promise rejeitada'));

// ex 3
// .then((valor) => {
//     const arr = [valor/2, valor/3, valor/5, valor/10];
//     console.log(arr);
// })
// .catch((valor) => console.log('Promise rejeitada'));

// Ex 4
// .then((valor) => {
//     const arr = [valor/2, valor/3, valor/5, valor/10];
//     console.log(arr);
// })
// .catch((valor) => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));

// Ex 5
.then((valor) => {
    new Promise((resolve, reject) => {
        const arr = [valor/2, valor/3, valor/5, valor/10];
        const sum = arr.reduce((result, number) => result +  number);
         (sum < 8000 ? resolve(sum) : reject());
    })
    .then((valor) => console.log(`Soma do array é ${valor}`))
    .catch((valor) => console.log('Deu pra somar não, fliho!'));
})
.catch((valor) => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));