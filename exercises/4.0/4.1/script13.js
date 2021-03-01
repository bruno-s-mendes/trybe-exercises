let salario = 3500;
let inss;
let ir;

// desconto inss:
if (salario <= 1556.94) {
    inss = 0.08*salario;
}
else if (salario >= 1556.95 && salario <= 2594.92) {
    inss = 0.09*salario;
}
else if (salario >= 2594.93 && salario <= 5189.82) {
    inss = 0.11*salario;
}
else if (salario > 5189.82) {
    inss = 570.88;
}

let salarioBase = salario-inss;

//Desconto IR
if (salarioBase <= 1903.98) {
    ir =0;
}
else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    inss = (0.075*salarioBase)-142.8;
}
else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    inss = (0.15*salarioBase)-354.8;
}
else if (salarioBase >= 3751.06 && salarioBase <= 1664.68) {
    inss = (0.225*salarioBase)-636.13;
}
else if (salarioBase >= 4664.68) {
    inss = (0.275*salarioBase)-869.36;
}
console.log (salarioBase-inss)
