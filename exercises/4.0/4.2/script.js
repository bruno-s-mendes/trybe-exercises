let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// exercicio 1
for (let i=0; i<numbers.length; i++) {
    console.log (numbers[i]);
}
// exercicio 2
let soma=0;
 for (let i=0; i<numbers.length; i++) {
    soma += numbers [i];
}

console.log ("soma="+soma);

// exercicio 3

let media = soma/(numbers.length);
console.log ("media aritimetica=" + media);

//exercicio 4

if (media > 20) {
    console.log(`valor maior que 20`);
}
else{
    console.log (`valor menor o igual a 20`)
}

//exerciocio 5

let maior=0;
 for (let i=0; i<numbers.length; i++) {
     if (numbers [i] > maior){
         maior = numbers [i];
    }
}
console.log (maior);

//exercicio 6

let impar=0;
 for (let i=0; i<numbers.length; i++) {
     if (numbers [i]%2 > 0) {
         impar++;
    }
}
console.log (impar);

//exercicio 7

let menor=numbers[0];
 for (let i=0; i<numbers.length; i++) {
     if (numbers [i] < menor){
         menor = numbers [i];
    }
}
console.log (menor);

//exercico 8

let lista=[];
for (let i=1; i<=25; i++) {
    lista.push(i);
}
console.log(lista);

//exercicio 9

let div=[];
for (let i=0; i<lista.length; i++) {
    div.push(lista[i]/2);
}
console.log(div);