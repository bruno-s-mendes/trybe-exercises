// gerador de 6 numeros aleatórios de 0 a 60 diferentes
let sena= [];

for (let i=1; i<=6; i++) {
    if (sena.length<=6) {
        let round = (Math.ceil(Math.random()*60));
            
        for (let i1=0; i1<sena.length; i1+=1){
            let now = sena[i1];
            switch (now){
                case (round):
                    i=i-1;
                    break;
            }
        }
        sena.push(round)
    }
}
console.log (sena);