// gerador de 15 numeros aleatórios de 1 a 15 diferentes
let facil= [];
let now=0;

for (let i=1; i<=15; i++) {
    if (facil.length<=15) {
        let round = (Math.ceil(Math.random()*15));
            
        for (let i1=0; i1<facil.length; i1+=1){
            now = facil[i1];
          if (now !== round){
            facil.push(round)
          }
        }        
    }
}
console.log(facil);