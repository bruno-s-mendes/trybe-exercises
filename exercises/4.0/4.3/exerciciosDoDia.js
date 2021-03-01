// exercicio 1
let num = 4;
let asterisco = '*';
let out='';

if (num>1) {
    for (let index = 1; index <= num; index +=1){
        out += asterisco;
    }
 }

for (let index = 1; index <= num; index += 1) {
    console.log (out);    
}
//exercicio 2
let num = 15;
let asterisco = '*';
let out='';

if (num>1) {
    for (let index = 1; index <= num; index +=1){
        out += asterisco;
        console.log (out)
    }
}

 //exercicio 3
let num = 7;
let asterisco = '*';
let out='';
let space = ' ';
let maxSpace ='';

if (num>1) {
    for (let index = 1; index <= num; index +=1){
        out += asterisco;
        for (let indexSpace = 1; indexSpace <= (num-index); indexSpace +=1) {
            maxSpace += space;
        }
        console.log (maxSpace + out)
        maxSpace ='';
    }
}
//exercicio 4

let num = 3;
let asterisco = '*';
let out='';
let space = ' ';
let maxSpace ='';

if (num>1) {
    for (let index = 1; index <= num; index +=1){
        out += asterisco;
        if (index%2>0){
            for (let indexSpace = 1; indexSpace <= (((num-index)/2)+((num-index)%2)); indexSpace +=1) {
                maxSpace += space;
            }
            console.log (maxSpace + out)
            maxSpace ='';
            }
        }
}

// exercicio 5

