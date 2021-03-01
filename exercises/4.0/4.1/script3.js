let nota = 99;
let status;

if (nota >= 80) {
    status = "aprovado";
}
else if (nota >= 60 && nota < 80) {
    status = "lista";
}
else if (nota < 60) {
    status = "reprovado";
}
console.log (status);

switch (status) {
    case "aprovado":
        console.log("Parabéns, você foi aprovado");
        break;
    case "lista":
        console.log("Você está na lista de espera");
        break;
    case "reprovado":
        console.log ("Você foi reprovado");
        break;
    default:
        console.log("não se aplica");
}